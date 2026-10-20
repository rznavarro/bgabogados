import { CriminalService } from '../types';

export const CRIMINAL_SERVICES: CriminalService[] = [
  {
    id: 'robos-hurtos',
    title: 'Robos y hurtos',
    description: 'Defensa o querella en delitos contra la propiedad.',
    whatsappMessage: 'Hola, necesito asesoría por un caso de robo o hurto.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'lesiones-agresiones',
    title: 'Lesiones, agresiones y riñas',
    description: 'Te representamos como imputado o como víctima.',
    whatsappMessage: 'Hola, necesito asesoría por un caso de lesiones o riña.',
    iconName: 'UserX',
  },
  {
    id: 'estafas',
    title: 'Estafas',
    description: 'Querellas para recuperar lo perdido y defensa ante acusaciones.',
    whatsappMessage: 'Hola, necesito asesoría por una estafa.',
    iconName: 'BadgeAlert',
  },
  {
    id: 'delitos-sexuales',
    title: 'Delitos sexuales',
    description: 'Abuso sexual y violación: casos delicados tratados con total reserva.',
    whatsappMessage: 'Hola, necesito asesoría confidencial por un delito sexual.',
    iconName: 'Lock',
  },
  {
    id: 'homicidios',
    title: 'Homicidios',
    description: 'Defensa y querella en causas de alta complejidad.',
    whatsappMessage: 'Hola, necesito asesoría por un caso de homicidio.',
    iconName: 'Scale',
  },
  {
    id: 'trafico-drogas',
    title: 'Tráfico de drogas',
    description: 'Defensa desde la detención hasta el juicio.',
    whatsappMessage: 'Hola, necesito asesoría penal por ley de drogas.',
    iconName: 'FileWarning',
  },
  {
    id: 'delitos-informaticos',
    title: 'Delitos informáticos',
    description: 'Fraudes digitales, accesos indebidos y otros delitos en línea.',
    whatsappMessage: 'Hola, necesito asesoría por delitos informáticos.',
    iconName: 'Terminal',
  },
  {
    id: 'manejo-ebriedad',
    title: 'Manejo en estado de ebriedad y Ley Emilia',
    description: 'Te asesoramos según la Ley de Tolerancia Cero y la Ley Emilia.',
    whatsappMessage: 'Hola, necesito asesoría por manejo en estado de ebriedad o Ley Emilia.',
    iconName: 'Car',
  },
  {
    id: 'eliminacion-antecedentes',
    title: 'Eliminación de antecedentes y prescripción',
    description: 'Revisamos si tu anotación o tu causa puede extinguirse.',
    whatsappMessage: 'Hola, necesito asesoría para eliminación de antecedentes o prescripción.',
    iconName: 'FileCheck2',
  },
  {
    id: 'beneficios-carcelarios',
    title: 'Beneficios carcelarios',
    description: 'Solicitamos los beneficios que correspondan a tu caso.',
    whatsappMessage: 'Hola, necesito asesoría sobre beneficios carcelarios.',
    iconName: 'KeyRound',
  },
];

export const CORPORATE_AREAS = [
  'Delitos económicos y compliance penal',
  'Delitos informáticos empresariales',
  'Administración desleal y fraude interno',
  'Constitución y modificación de sociedades',
  'Contratos comerciales y pactos de accionistas',
  'Fusiones y adquisiciones (M&A)',
  'Propiedad intelectual y marcas',
  'Juicios comerciales y arbitrajes',
  'Procedimientos concursales y reorganizaciones',
  'Cobranzas judiciales y embargos',
  'Asesoría laboral corporativa',
];

export const OFFICE_PHOTOS = [
  {
    id: 'oficina-4',
    title: 'Sala de reuniones principal',
    url: 'https://bustosgomez.cl/wp-content/uploads/2022/04/BG-oficinas-scaled.jpg',
    alt: 'Sala de reuniones principal de BG Abogados en Providencia, Santiago',
  },
  {
    id: 'oficina-1',
    title: 'Área de trabajo y biblioteca legal',
    url: 'https://bustosgomez.cl/wp-content/uploads/2021/10/BF6A1251.jpg',
    alt: 'Oficina y biblioteca jurídica de BG Abogados en Providencia',
  },
  {
    id: 'oficina-2',
    title: 'Despacho de litigación y atención',
    url: 'https://bustosgomez.cl/wp-content/uploads/2021/11/BF6A1291-scaled.jpg',
    alt: 'Despacho privado para atención confidencial de clientes en BG Abogados',
  },
  {
    id: 'oficina-3',
    title: 'Recepción y coordinación de causas',
    url: 'https://bustosgomez.cl/wp-content/uploads/2022/04/BF6A7348-1-1-1-scaled.jpg',
    alt: 'Recepción de las oficinas 302 y 303 en La Concepción 81, Providencia',
  },
];
