
import { Service, Project, Stat } from './types';

export const SERVICES: Service[] = [
  {
    id: 'heavy-civil',
    title: 'Heavy Civil Construction',
    description: 'Expertise in large-scale earthwork, site preparation, and infrastructure development across Texas.',
    icon: 'engineering',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMERhKDg5lxH4NNwD_pfT0JyDIWuOlV8MTGIq8lC3OUAwJHuDXW5Y8NnlMsMzPUNpBakGASCW-nC9i79Dl0UwY7j_zukDRRJiCvH-nPp9bIQvOhnqbqs9Rapce5-6WSIzCfmqPqp7UCri1Kphaj0z1gQX4QBSbhj4i9daP6Rz0XlF6rO2TO6na5YL0Wn8cSvQgH77m4KVnTXVsbC5BTrWa3I_4J6x6G6ugbHxcU2moVUs4pU0OevfETcT8Jv0f2kzr_bIu1DPTwxU'
  },
  {
    id: 'industrial',
    title: 'Industrial Construction',
    description: 'Specialized maintenance and construction for industrial facilities, refineries, and plants.',
    icon: 'factory',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKuxd_G-Q8u-ji1e3n6uC0RE2ZQVLOOzPJt0MAdY3n_f2Brs7eELEDqRc7mQBIO0dK6q7ce52wahTj2Dstem3bYWd2pla0pymB1Z9ODlMn5DHtlhLjHEJMAP1xGnk-xSWOcLjrvLfJ6ON8-ieBoqSImDUZ2uYfO4yd7GsCiIKP6N3UY3DUthAzdjA6bXHQOeamhkDWMs8rzsqlpAsVIA34WZsGW3Pz0gyLDGFPm-TERv_dqru_JVLRe2m1IePzazbG1nBkPIlUMbQ'
  },
  {
    id: 'municipal',
    title: 'Municipal Infrastructure',
    description: 'Building essential public infrastructure, utilities, and community systems in South Texas.',
    icon: 'location_city',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHpuWN1JAZRr__WGexJzm2ehqejF93Tab95PEHx8JJixpdtV9-QEk-afE_1iTx_SRqozoLZTZwPkh3jO27dspMmRhX_zh3H5-TZK3K1Rjc-v1g5A5i3IWJT5MGxz2_CKd_PvvDbOZnDOEWdrzGctw4eZqk4_rIrcXTWqt_tKsEaqlM67vwe3_JqSSb8W9FQkmtmy-LqhaN1wrvs-nBoRPsPV54BV8vwYwKaiye8eiej6W7Ml70FJPkHR_c_VHYs5rfVmLdsdvkp6k'
  },
  {
    id: 'heavy-hauling',
    title: 'Heavy Hauling',
    description: 'Reliable transportation of oversized loads and heavy equipment with a modern logistics fleet.',
    icon: 'local_shipping',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAl5QAZlu9ysEMe8YA-b9Cwag-c7Z6O0uLPV-e8oEJqBQkMEE63z5XxnRiopAOGcEla22f4kDKo3wdtySY0K_U-AvsQWYyPK2lQ3Ank2ewOI7fqhObxn4_guDkTJPBOT73XUCg9wHbHNXAVESahuOjc27C_U4JSekQhX-gWlIkuJRcT-qcH6jKgmWOtQXhx-DssuyJNEMEXGTix0yEHfjr6arJ-WsP-m0a78-m8BF-lvIg36d7vNiRQLDHFHSvUGmFAkzrJdcnJvqg'
  },
  {
    id: 'roadwork',
    title: 'Road Construction & Paving',
    description: 'Asphalt and concrete paving, grading, and curbing for high-traffic highways and private roads.',
    icon: 'add_road',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsjiro-kQZoCrKNmIU4DEa0BHIrtV9P919sCWZt-3z0SV0PNpXz9P42rKS1Cay87nqClAZPIGttDzilQ5LMpOSF2hdxoc9eVslwpCAnu-W8hUN6AXhVezjpXoOdMqT5GpgJF-PS7uV5tK9R2L-WYRzkMd-qxjakebEpC7vxwpjRff0hiwR8NMfmSl3yGE4TLj5voX3GktWrkNLDC55DfoDUi9ZPbl6LLonTXk_fx6HPUkzilpGQTdSR7oVCICfxKUajVizWphkXw8'
  },
  {
    id: 'tilt-wall',
    title: 'Tilt-Wall Construction',
    description: 'Durable and efficient tilt-wall construction for warehouses and large-scale commercial facilities.',
    icon: 'foundation',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMWv_60kDwJS17YYvgB_pZrDdiJtsQVxBbThf4WWYmlv3bNd1C3DY4oseqdm2Q_M2NZvsW7DK0NtFb_ZeEaOrwjCACknlK_PDLFUr7du2yIO6njKBJ4bdaEijl4xAdxRnBovrwQtey-VaRgeqiWstVL6uBMWALK1j8TYAukQ-Oj58qZiA819K1fqzGyKM0x0BjxwIS5eINgQ9xUlAI5R4y5O5On8-EdJVBN4M8eDrdovcCcmgg6RU0ZGCurvGmY_asAgwsM-lJVI4'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'refinery-expansion',
    title: 'Refinery Expansion Project',
    category: 'Industrial',
    location: 'Corpus Christi, TX',
    client: 'Industrial Partners',
    status: 'Completed',
    completionYear: '2023',
    featured: true,
    description: 'Comprehensive site grading and deep foundation work for a major petrochemical processing unit expansion.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIEu2G9v6171MpU-2U_6MD2ULseW7zPDPOp9PqJRH1KJVNbdKxF-kjli-okZCIFG_OKSzJ3RJaViLiH3Sj-2TRdIb3Kysh3dbwnNmjhw2lSBs1-BatYoZKfLiNCBDasflpBtd4C0Mwg7IVE9JK23X5mVopkqrI0IlNvFshSIcC6DnaReJFMyijPOI1y2q0n6mv57bIeM4OFaSak76pUZIcqwP24e1xMafCKNpBndgZk_UbTYHn-B49ZraQGCwvVsj8uIrZii_yvVw'
  },
  {
    id: 'regional-pipeline',
    title: 'Regional Pipeline Access',
    category: 'Petrochemical',
    location: 'South Texas',
    client: 'Energy Solutions LLC',
    status: 'Completed',
    completionYear: '2023',
    featured: true,
    description: 'Massive earthmoving and trenching operation spanning 15 miles for critical energy transport infrastructure.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu2WYr_hF6hPltsY8KzA_4-RQzk12l9KaQcf8FonXJprJHBOj7qgYWzQ2dbwQNB2nkbiXOttC4hJOFFX8RJyfva06brAkTo2SXoqjSFmlJNZ0lrBePjv_Tm3hoepVlenHVC8AnZE40CmuLTFbDGmG9icBa2jEEvgYxO3E4-hPvFZnaN6C2ZXX3FBYOPHQ0OheGp96TrelA4mL5LBPCWrPPYJuWLya0vrBZJZtdcRtIsw6fSbdm2dl_D3rTjQQFc83tko8tKEg0qzA'
  },
  {
    id: 'water-treatment',
    title: 'Municipal Water Upgrade',
    category: 'Municipal',
    location: 'Laredo, TX',
    client: 'City of Laredo',
    status: 'Ongoing',
    description: 'Infrastructure upgrade of local water treatment facilities including new drainage and concrete structures.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2qnpECN0O9JcTBA3lxPBmvcIZGN5i-JtoFlIUBC4Ps3KFLzvxRH6VJqGoTFAWOP2chM6TcQHOkCPu-1g_5jXOr6BAPEacsmiwB62yPTIGoaLAQzoCLlaNmkwAabtbyq_TfmFdplVgVadBQnmUU_Ao2yylW076rZutPjW4q-bCZZ9_5WP6sXFXRGcQ9cPpY-n1w5VKtWR0Tm9SR9tXqPfwgcL12HwaHbtVpfAWjQIVoyrpsTWUKloxLE77fQcMEItyWbjmsKPep2A'
  }
];

export const STATS: Stat[] = [
  { label: 'Years of Experience', value: '12+' },
  { label: 'Completed Projects', value: '300+' },
  { label: 'Safety Record', value: '100%' },
  { label: 'Team Members', value: '50-200' }
];

export const COMPANY_INFO = {
  address: '7505 Up River Rd, Corpus Christi, Texas 78409',
  phone: '(361) 555-0123',
  email: 'info@jecs.cc',
  social: {
    facebook: 'https://facebook.com/JEConstructionServices',
    instagram: 'https://instagram.com/je_construction_services',
    linkedin: 'https://linkedin.com/company/je-construction-services'
  }
};
