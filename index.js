// Host-side entry is a no-op: the theme is entirely client-rendered (design
// token overrides + an effects layer + a floating toggle, persisted per
// browser via localStorage under 'gamespace-ui-theme' — the key carried over
// from the plugin's origin inside dsh-gamespace so existing users keep their
// preference). This file exists so the bundle patch inserts a loadable entry.
export const name = 'dsh-scifi-theme'
export const inject = []

export function apply() {}
