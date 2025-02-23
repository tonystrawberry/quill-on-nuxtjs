import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editorStore', {
  state: () => ({
    headerHtml: '',
    bodyHtml: '',
    footerHtml: '',
    selectedSection: null as EditorSectionType,
    showEditIcon: true
  }),
  actions: {
    setHeaderHtml(html: string) {
      this.headerHtml = html
    },
    setBodyHtml(html: string) {
      this.bodyHtml = html
    },
    setFooterHtml(html: string) {
      this.footerHtml = html
    },
    setSelectedSection(selectedSection: EditorSectionType) {
      this.selectedSection = selectedSection
    },
    setShowEditIcon(showEditIcon: boolean) {
      this.showEditIcon = showEditIcon
    }
  }
})
