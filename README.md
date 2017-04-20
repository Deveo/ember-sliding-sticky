# ember-sliding-sticky

A drop-in implementation for sticky elements. By default, uses `transform: translate3d(0, Npx, 0)` to position sticky elements.

**Pros**

* Very easy to use.
* Works correctly and naturally with sticky elements taller than viewport.
* Works both with window scrolling and custom element scrolling.
* Unlike `position: sticky`, works fine inside parents that have `overflow` and/or `transform`.
* Thanks to not using `position: fixed`, when your scroll container is shorter than viewport and the sticky element is taller, the sticky element never overflows out of parent.
* Allows for a sliding animation. Just enable throttling and apply `transition: transform 0.5s ease` to your sticky element.

**Cons**

* Only one sticky element per column.
* For the sticky element to appear fixed, throttling must be disabled. This may cause two issues:
    * Scrolling may be laggy on slow systems.
    * The sticky element may jitter slightly.
    This effect gets worse when there are many sticky elements on the page. 
* Only respects one scroll container. If you have a scrolling container inside a scrolling container, you can only tell a sticky element to align according to the inner container's scrolling. But that's a very rare case.
* Relies on jQuery.

**Restrictions**

Requires a sticky element to be initially located at the top of its immediate parent, so that the whole parent's inner height is available for the sticky element to roam.

One possible way to achieve this is to apply the following CSS to the immediate parent of the sticky element:

```
display:     flex;
align-items: flex-start;
```



## Installation

With npm: `ember i ember-sticky-container`

With Yarn: `yarn add -D ember-sticky-container`



## Quickstart

In a template, replace an HTML element you want to be sticky with the `sliding-sticky` component.

Before:

```
<div>My sidebar</div>
```

After: 

```
{{#sliding-sticky}}
  My sidebar
{{/sliding-sticky}}
```

Alternatively, you can apply the sliding sticky mixin to your components:

```js
import Component from 'ember-component'
import SlidingStickyMixin from 'ember-sliding-sticky/mixin'

export default Component.extend(SlidingStickyMixin, {
  // ...
})
```



## Animating sticky elements

By applying `transition: transform 0.5s ease` CSS to your sticky elements, you can make them appear static while you're scrolling, but when you stop scrolling, the elements smoothly slide back into view.

If you go for this effect, it's highly recommended to enable throttling (see below), it will prevent scrolling from appear laggy on slow systems. Throttling is disabled by default because without animation it causes the sticky element to jitter.



## Available options

| Option                          | Type                                              | Default value | Description                                                                                                                |
|:--------------------------------|:--------------------------------------------------|:--------------|:---------------------------------------------------------------------------------------------------------------------------|
| `slidingStickyScrollParent`     | selector string, DOM element or jQuery collection | `window`      | Which scroll container to use.                                                                                             |
| `slidingStickyThrottleDuration` | Number                                            | `0`           | Throttle duration in milliseconds. `0` disables throttling. Set to `100` or so if you're using the `transition` animation. |




## Overridable methods

| Option                       | Arguments                       | Description                                                                                                                              |
|:-----------------------------|:--------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| `slidingStickyApplyPosition` | `positionPx` (number of pixels) | Lets you customize the way the element is positioned. By default, applies `transform: translate3d(0, Npx, 0)` inline CSS to the element. |
| `slidingStickyTransitionEnd` | none                            | Lets you react when the element finishes positioning. This is only useful when you apply `transition: transform` to the element.         |



## Credit

Proudly built in [@Deveo](https://github.com/Deveo) by [@lolmaus](https://github.com/lolmaus/) and [contributors](https://github.com/Deveo/ember-sliding-sticky/graphs/contributors).

https://deveo.com



## License

[MIT](https://github.com/Deveo/ember-sliding-sticky/blob/gen-1/LICENSE.md)
