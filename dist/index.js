'use strict'
var e = require('react')
const M = ({
  service: t,
  ItemBuilder: a = L,
  className: s = 'grid',
  onClick: o
}) => (
  ([t.items, t.setItems] = e.useState(t.items)),
  (t.setItem = e.useMemo(
    () => (e) => t.setItems((t) => t.map((t) => (t.id === e.id ? e : t))),
    []
  )),
  e.createElement(
    'div',
    { id: 'grid-container', className: s, onClick: o },
    t.items.map((t, s) => e.createElement(a, { key: s, item: t }))
  )
)
var P = e.memo(M)
exports.Grid = P
