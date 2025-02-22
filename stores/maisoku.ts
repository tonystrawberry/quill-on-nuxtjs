import { defineStore } from 'pinia'

export const useMaisokuStore = defineStore('maisokuStore', {
  state: () => ({
    headerHtml: '',
    bodyHtml: '',
    footerHtml: '',
    selectedSection: null as MaisokuSectionType
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
    setSelectedSection(selectedSection: MaisokuSectionType) {
      this.selectedSection = selectedSection
    },
  }
})
