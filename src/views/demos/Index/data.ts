import type { ServiceType, TestimonialType, UserType } from '@/types'
import {
  BIconBinoculars,
  BIconBoxes,
  BIconBriefcase,
  BIconBullseye,
  BIconCircleSquare,
  BIconCodeSlash,
  BIconStack,
  BIconVectorPen
} from 'bootstrap-icons-vue'
import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import client1Img from '@/assets/images/client/01.svg'
import client2Img from '@/assets/images/client/02.svg'
import client3Img from '@/assets/images/client/03.svg'
import client4Img from '@/assets/images/client/04.svg'
import client5Img from '@/assets/images/client/05.svg'

export const avatars = [avatar6, avatar5, avatar2, avatar3, avatar4]

export const clients = [client1Img, client2Img, client3Img, client4Img, client5Img, client1Img]

export const services: ServiceType[] = [
  {
    title: 'Product Design',
    description: 'Creating products that users love and businesses need.',
    icon: BIconBoxes
  },
  
  {
    title: 'MVP Development',
    description: 'Growing brands online through digital channels.',
    icon: BIconStack
  },
  {
    title: 'Application Development',
    description: 'Building applications that solve real-world problems.',
    icon: BIconCircleSquare

  },
  {
    title: 'UI/UX Design',
    description: 'Creating user interfaces that are both efficient and enjoyable.',
    icon: BIconVectorPen
  },
  {
    title: 'AI Solutions',
    description: 'Integrate AI to enhance business processes and customer experiences.',
    icon: BIconBinoculars
  },
  {
    title: 'DevOps Solutions',
    description: 'Streamlining development and operations for faster delivery.',
    icon: BIconBriefcase
  },
  {
    title: 'Digital Marketing',
    description: 'Helping businesses grow through online marketing strategies.',
    icon: BIconBullseye
  },
  {
    title: 'E-commerce Solutions',
    description: 'Building online stores with seamless user experiences.',
    icon: BIconCircleSquare
}
  
]

export const userData: UserType[] = [
  {
    id: '1',
    avatar: avatar3,
    firstName: 'Nix',
    lastName: 'Maxwell'
  },
  {
    id: '2',
    avatar: avatar1,
    firstName: 'Dennis',
    lastName: 'Barrett'
  },
  {
    id: '3',
    avatar: avatar2,
    firstName: 'Nix',
    lastName: 'Maxwell'
  },
  {
    id: '4',
    avatar: avatar5,
    firstName: 'Carolyn',
    lastName: 'Ortiz'
  }
]

export const testimonials: TestimonialType[] = [
  {
    id: '1',
    user: userData[0],
    comment:
      "As a founder, I needed an MVP built fast without compromising quality. IT Castle delivered on time and refined our product roadmap.",
    rating: 4.9
  },
  {
    id: '2',
    user: userData[1],
    comment:
      "Launching our online store was seamless with IT Castle. Their expertise in e-commerce and UX design helped us create a site that converts effortlessly.",
    rating: 4.5
  },

  {
    id: '3',
    user: userData[2],
    comment: 'IT Castle stands out for their data-driven digital marketing. Their SEO strategies significantly improved our clients rankings.',
    rating: 4.8
  },
  {
    id: '4',
    user: userData[3],
    comment: 'Our sales grew by 30% after partnering with IT Castle. Their expertise in checkout optimization and UX design was game-changing.',
    rating: 4.7
  }
]
