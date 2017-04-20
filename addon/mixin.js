// ----- Ember modules -----
import Mixin from 'ember-metal/mixin'
import computed, {reads} from 'ember-computed'
import on from 'ember-evented/on'
import {throttle} from 'ember-runloop'

// ----- Third-party modules -----
import $ from 'jquery'



export default Mixin.create({

  // ----- Arguments -----
  slidingStickyScrollParent     : window,
  slidingStickyThrottleDuration : 0,



  // ----- Overridable methods -----
  slidingStickyApplyPosition (positionPx) {
    const $element       = this.get('_slidingSticky_$element')
    const cssDeclaration = {transform: `translate3d(0, ${positionPx}px, 0)`}

    $element.css(cssDeclaration)
  },

  slidingStickyTransitionEnd () {
    console.log('transition end!')
  },



  // ----- Computed properties -----
  _slidingSticky_$scrollParent : computed('slidingStickyScrollParent', function () {
    const selectorOrJQueryCollection = this.get('slidingStickyScrollParent')
    return $(selectorOrJQueryCollection)
  }).readOnly(),

  _slidingSticky_$element : computed(function () {
    return this.$()
  }).readOnly(),

  _slidingSticky_$parent : computed('_slidingSticky_$element', function () {
    return this
      .get('_slidingSticky_$element')
      .parent()
  }).readOnly(),

  _slidingSticky_$window : computed(function () {
    return $(window)
  }).readOnly(),

  _slidingSticky_eventName : computed('elementId', function () {
    const id = this.get('elementId')
    return `slidingSticky.${id}`
  }).readOnly(),



  // ----- Methods -----
  _slidingSticky_reposition () {
    const viewportIsElement = this.get('slidingStickyScrollParent') !== window

    const $scrollParent         = this.get('_slidingSticky_$scrollParent')
    const scrollParentOffsetTop = viewportIsElement ? $scrollParent.offset().top : 0
    const scrollParentScrollTop = $scrollParent.scrollTop()

    const $element           = this.get('_slidingSticky_$element')
    const elementOffsetTop   = $element.offset().top
    const elementOuterHeight = $element.outerHeight()

    const viewportInnerHeight =
      viewportIsElement
        ? $scrollParent.innerHeight()
        : window.innerHeight

    const elementTopRelativeToViewport =
      viewportIsElement
        ? elementOffsetTop - scrollParentOffsetTop
        : elementOffsetTop - scrollParentScrollTop

    const elementBottomRelativeToViewport = elementTopRelativeToViewport + elementOuterHeight

    const elementFullyCoversViewport =
         elementTopRelativeToViewport    < 0
      && elementBottomRelativeToViewport > viewportInnerHeight

    if (elementFullyCoversViewport) return

    const $parent             = this.get('_slidingSticky_$parent')
    const parentOffsetTop     = $parent.offset().top
    const parentTopPadding    = parseInt($parent.css('padding-top'), 10)
    const parentBottomPadding = parseInt($parent.css('padding-bottom'), 10)
    const parentInnerHeight   = $parent.innerHeight() - parentTopPadding - parentBottomPadding
    const parentBorder        = parseInt($parent.css('border-top-width'), 10)

    const parentTopRelativeToViewport =
      viewportIsElement
        ? parentOffsetTop - scrollParentOffsetTop
        : parentOffsetTop - scrollParentScrollTop

    const isElementTopWithinViewport =
         elementTopRelativeToViewport >= 0
      && elementTopRelativeToViewport <  viewportInnerHeight

    let position = -parentTopRelativeToViewport - parentBorder - parentTopPadding

    // Stick element top or element bottom?
    if (
         elementOuterHeight < viewportInnerHeight
      || isElementTopWithinViewport
    ) {
      if (position < 0) position = 0
      else if (position + elementOuterHeight > parentInnerHeight) {
        position = parentInnerHeight - elementOuterHeight
      }

    } else {
      position -= (elementOuterHeight - viewportInnerHeight)
      if (position < 0) position = 0
      else if (position > parentInnerHeight - elementOuterHeight) {
        position = parentInnerHeight - elementOuterHeight
      }
    }

    this.slidingStickyApplyPosition(position)
  },

  _slidingSticky_repositionMaybeThrottle () {
    const duration  = this.get('slidingStickyThrottleDuration')

    if (duration) {
      throttle(this, this._slidingSticky_reposition, duration, false)
    } else {
      this._slidingSticky_reposition()
    }
  },



  // ----- Events -----
  _slidingSticky_applyEventsToScrollParent : on('didInsertElement', function () {
    this._slidingSticky_reposition()

    const eventName = this.get('_slidingSticky_eventName')

    this
      .get('_slidingSticky_$scrollParent')
      .on(`scroll.${eventName} wheel.${eventName}`, () => {
        this._slidingSticky_repositionMaybeThrottle()
      })
  }),

  _slidingSticky_applyEventsToElement : on('didInsertElement', function () {
    if (typeof this.slidingStickyTransitionEnd !== 'function') return

    const eventName = this.get('_slidingSticky_eventName')

    this
      .get('_slidingSticky_$element')
      .on(`
        transitionend.${eventName}
        webkitTransitionEnd.${eventName}
        oTransitionEnd.${eventName}
        otransitionend.${eventName}
        MSTransitionEnd.${eventName}
      `, () => {
        this.slidingStickyTransitionEnd()
      })
  }),

  _slidingSticky_applyEventToWindow : on('didInsertElement', function () {
    const eventName = this.get('_slidingSticky_eventName')

    this
      .get('_slidingSticky_$window')
      .on(`resize.${eventName}`, () => {
        this._slidingSticky_repositionMaybeThrottle()
      })
  }),

  _slidingSticky_removeEvents : on('willDestroyElement', function () {
    const eventName = this.get('_slidingSticky_eventName')

    this.get('_slidingSticky_$scrollParent').off(`scroll.${eventName}`)
    this.get('_slidingSticky_$scrollParent').off(`wheel.${eventName}`)
    this.get('_slidingSticky_$window')      .off(`resize.${eventName}`)

  }),
})
