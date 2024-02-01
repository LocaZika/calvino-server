type TCaptionItemMenuItem = {
  id: string,
  name: string,
  path: string,
}
type TCaptionItem = {
  id: string,
  title: string,
  menu: TCaptionItemMenuItem[],
}
type TFooter = {
  logo: string,
  description: string,
  captions: TCaptionItem[],
}