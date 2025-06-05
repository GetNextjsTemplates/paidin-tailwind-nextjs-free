export type submenuItem = {
  label: string
  href: string
}

export type headerItem = {
  label: string
  href: string
  submenu?: submenuItem[]
}
