import {
 ovBlock,
 ovFooter,
 ovLink,
 ovImage,
 ovQuoteFirm, 
 ovPhoto, 
 ovSeparator,
 ovFrame,
 ovNote,
 ovText,
 ovQuote,
 ovBold,
 ovTitle,
 ovList,
 ovSubtitle,
 ovOrderList,
 ovSummary,
 ovHeader,
 ovDetail,
 ovButtonGosh
} from '@/components/shared'

export default {
  name: 'Article',
  components: { 
    ovSummary, 
    ovOrderList, 
    ovSubtitle, 
    ovList, 
    ovTitle, 
    ovBold, 
    ovQuote,
    ovText, 
    ovNote, 
    ovBlock, 
    ovFrame, 
    ovSeparator, 
    ovPhoto, 
    ovQuoteFirm, 
    ovImage, 
    ovLink, 
    ovFooter, 
    ovHeader,
    ovDetail,
    ovButtonGosh
  },
  props: ['article']
}