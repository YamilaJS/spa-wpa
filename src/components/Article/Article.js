import Header from "@/components/shared/Header";
import ovSummary from "@/components/shared/ovSummary";
import ovOrderList from "@/components/shared/ovOrderList";
import ovSubtitle from "@/components/shared/ovSubtitle";
import ovList from "@/components/shared/ovList";
import ovTitle from "@/components/shared/ovTitle";
import ovBold from "@/components/shared/ovBold";
import ovQuote from "@/components/shared/ovQuote";
import ovText from "@/components/shared/ovText";
import ovNote from "@/components/shared/ovNote";
import ovFrame from "@/components/shared/ovFrame";
import ovSeparator from "@/components/shared/ovSeparator";
import ovPhoto from "@/components/shared/ovPhoto";


import {
  ovBlock,
} from '@/components/shared'

export default {
  name: 'Article',
  components: { Header, ovSummary, ovOrderList, ovSubtitle, ovList, ovTitle, ovBold, ovQuote, ovText, ovNote, ovBlock, ovFrame, ovSeparator, ovPhoto },
  props: ['article'],
  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  }
}