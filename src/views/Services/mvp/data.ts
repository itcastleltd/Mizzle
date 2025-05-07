import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import decoration10 from '@/assets/images/elements/saas-decoration/10.png'
import decoration11 from '@/assets/images/elements/saas-decoration/11.png'
import decoration12 from '@/assets/images/elements/saas-decoration/12.png'
import project1 from '@/assets/images/portfolio/list/02.jpg'
import project2 from '@/assets/images/portfolio/list/03.jpg'
import type { FAQType, ServiceType, ProjectType, StatisticType } from '@/types'

type FeaturedType = {
  odd?: boolean
  lg?: number
  cols?: number
  variant?: string
  span?: string
} & ServiceType

export const swiper: string[] = [client5, client4, client1, client2, client3, client6]

export const features: FeaturedType[] = [
  {
    title: 'Design & Prototyping',
    description:
      'Our exceptional design team creates intuitive UI/UX prototypes, allowing you to visualize the product and gather early feedback.',
    image: decoration10,
    odd: false
  },
  {
    title: 'Development & Testing',
    description:
      'Utilizing technologies like Laravel, React, Vue.js, and Node.js, we build a robust and scalable minimum viable product tailored to your needs.',
    image: decoration11,
    odd: true
  },
  {
    title: 'Launch Stretegy & Support',
    description:
      'We assist with deployment and provide ongoing support to gather user feedback and plan subsequent iterations.',
    image: decoration12,
    odd: false
  }
]

export const avatars: string[] = [avatar6, avatar5, avatar2, avatar3, avatar4]

export const faq: FAQType[] = [
  {
    question: 'How long does it take to develop an MVP?',
    answer:
      'A typical MVP takes 4–12 weeks depending on complexity and scope. We focus on essential features to ensure a quick launch and gather user feedback.',
  },
  {
    question: 'Do you sign NDAs for idea protection?',
    answer:
      'Yes, we offer full confidentiality and sign NDAs before any discussion. Your idea is safe with us.',
  },
  {
    question: 'Can you help us scale the MVP post-launch?',
    answer:
      'Absolutely. We offer long-term support for product scaling, feature enhancements, and team augmentation.'
  },
  {
    question: 'Do you offer themes in other categories?',
    answer:
      'But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.'
  },
  {
    question: 'Do I need to credit you when I use this theme?',
    answer:
      'But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.'
  }
]

export const finalFeature: FeaturedType[] = [
  {
    lg: 6,
    variant: 'dark',
    title: 'Faster Time-to-Market',
    description: 'Launch MVPs in two weeks, not in a months',
    span: '42%'
  },
  {
    lg: 6,
    variant: 'success',
    title: 'Return on Initial Investment',
    description: 'Build only what matters, validate early, and scale smarter.',
    span: '5X'
  },
  {
    cols: 12,
    variant: 'danger',
    title: 'Raised by Our Clients',
    description:
      'We’ve helped multiple startups raise funding post-MVP launch.',
    span: '$32.3M'
  }
]

export const projects: ProjectType[] = [
  {
    name: 'Website optimization for techWave',
    category: 'Graphic design',
    image: project1,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    name: 'Transforming ideas into reality',
    category: 'UI/UX design',
    image: project2,
    route: { name: 'portfolio.case-study.v2' }
  }
]

export const statData: StatisticType[] = [
  {
    title: 'Worldwide client',
    number: 30,
    prefix: '>',
    suffix: 'K'
  },
  {
    title: 'Analyze business reports',
    number: 99,
    suffix: '%'
  },
  {
    title: 'Worldwide projects',
    number: 350,
    suffix: '+'
  }
]
