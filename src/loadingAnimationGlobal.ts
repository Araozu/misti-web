import { createSignal } from "solid-js"

const [_animationActive, _setAnimationActive] = createSignal(false)
export const animationActive = _animationActive
export const setAnimationActive = _setAnimationActive

