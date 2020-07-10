import React from 'react';

import User from '@pagerland/icons/src/line/User';
import Building from '@pagerland/icons/src/line/Building';
import MapMarker from '@pagerland/icons/src/line/MapMarker';
import Phone from '@pagerland/icons/src/line/Phone';
import Envelope from '@pagerland/icons/src/line/Envelope';

import Icon from '@pagerland/common/src/components/Icon';

import textToMultiline from '@pagerland/common/src/utils/textToMultiline';

import * as Yup from 'yup';
import background from './assets/escavadora.jpg';
import background2x from './assets/escavadora@2x.jpg';

import about1 from './assets/about/about1.jpg';
import aboutLarge1 from './assets/about/about1-huge.jpg';
import about12x from './assets/about/about1-@2x.jpg';
import about2 from './assets/about/about2.jpg';
import aboutLarge2 from './assets/about/about2-huge.jpg';
import about22x from './assets/about/about2-@2x.jpg';
import about3 from './assets/about/about3.jpg';
import aboutLarge3 from './assets/about/about3-huge.jpg';
import about32x from './assets/about/about3-@2x.jpg';

import materials1 from './assets/materials/materials-1.jpg';
import materials12x from './assets/materials/materials-1@2x.jpg';
import materials2 from './assets/materials/materials-2.jpg';
import materials22x from './assets/materials/materials-2@2x.jpg';
import materials3 from './assets/materials/materials-3.jpg';
import materials32x from './assets/materials/materials-3@2x.jpg';

import contactImg from './assets/contact.jpg';
import contactImg2x from './assets/contact@2x.jpg';

export default {
  title: 'Real Estate',
  navbar: {
    links: [
      {
        to: '',
        'data-to': '',
        label: 'Inicio'
      },
      {
        to: 'about',
        'data-to': 'about',
        label: 'Sobre nosotros'
      },
      {
        to: 'materials',
        'data-to': 'materials',
        label: 'Materiales'
      },
      {
        to: 'location',
        'data-to': 'location',
        label: 'Situación'
      },
      {
        to: 'contact',
        'data-to': 'contact',
        label: 'Contacto'
      }
    ]
  },
  welcome: {
    background: {
      src: background,
      srcSet: `${background} 1x, ${background2x} 2x`,
      alt: 'Real Estate'
    },
    title: 'Hormigón, Áridos y Excavaciones',
    price: '',
    features: [],
    cta: {
      to: 'about',
      children: 'Sobre nosotros'
    }
  },
  about: {
    title:
      'Somos uns empresa familiar dedicada a la extracción, lavado, triturado y clasificado de áridos.',
    text: 'También realizamos excavaciones y alquilamos maquinaria para obras.',
    text2:
      'Forsen S.L. se constituyó en el año 1992, pero sus orígenes empresariales provienen de los años 80, en actividad de extracción y venta de áridos con la dedicación y esfuerzo de nuestros trabajadores, las inversiones en maquinaria e instalaciones, la potenciación de los recursos humanos y su formación, los diferentes cambios y adaptaciones, se ha consolidado y se reconoce como FORSEN S.L.',
    text3:
      'En nuestra empresa fabricamos hormigón conforme instrucción EHE-OS que establece la orden ministerial 21 de noviembre de 2001 para la realización de control de producción, con observaciones propias medioambientales y de seguridad.',
    text4:
      'También nos estamos adaptando a la nueva normativa del REAL DECRETO 163/19 sobre hormigones.',
    gallery: [
      {
        source: aboutLarge1,
        ImgProps: {
          src: about1,
          srcSet: `${about1} 1x, ${about12x} 2x`
        }
      },
      {
        source: aboutLarge2,
        ImgProps: {
          src: about2,
          srcSet: `${about2} 1x, ${about22x} 2x`
        }
      },
      {
        source: aboutLarge3,
        ImgProps: {
          src: about3,
          srcSet: `${about3} 1x, ${about32x} 2x`
        }
      }
    ]
  },
  materials: {
    title: 'Materiales',
    name: 'materials',
    sections: [
      {
        ImgProps: {
          src: materials2,
          srcSet: `${materials2} 2x, ${materials22x} 2x`
        },
        title: 'Áridos',
        text: 'Los áridos empleados en la fabricación de hormigones y morteros, se obtienen a través de tratamientos de machaqueo, molienda y cribado de materiales naturales extraïdos de nuestra cantera.'
      },
      {
        ImgProps: {
          src: materials1,
          srcSet: `${materials1} 1x, ${materials12x} 2x`
        },
        title: 'Hormigón',
        text: 'Hormigones para usos estructurales en masa y armado HM y HA, con amplia gama de resistencias, relaciones agua cemento y ambientes conforme a las especificaciones de durabilidad, establecidas en las tablas 37.3.2a y 37.3.2b de la EHE-08.'
      },
      {
        ImgProps: {
          src: materials3,
          srcSet: `${materials3} 2x, ${materials32x} 2x`
        },
        title: 'Excavaciones',
        text: 'El proceso de molienda en nuestra cantera es realizado mediante molinos de impacto, por lo que la forma de las partículas obtenidas es excellente, lograndose valores muy bajos en el índice de lajas.'
      }
    ]
  },
  location: {
    title: 'Situación',
    text:
      'Nuestra empresa se encuentra situada en las casas del rio Rosell (Provincia de Castellón). Al lado de la Sénia (Provincia de Tarragona)',
    map: {
      cords: {
        lat: 40.6383757,
        lng: 0.2751377
      }
    }
  },
  contact: {
    title: 'Contacto',
    thumbnail: {
      src: contactImg,
      srcSet: `${contactImg} 1x, ${contactImg2x} 2x`
    },
    details: {
      title: 'Contacta con nosotros para cualquier duda',
      text:
        '',
      info: [
        {
          icon: Building,
          text: 'Forsen S.L.'
        },
        {
          icon: MapMarker,
          text: textToMultiline`Partida Barranco Les Timbes S/N Rosell 12511 (Castellón).`
        },
        {
          icon: Phone,
          text: 'Raúl (Gerente) +34 629 183 121'
        },
        {
          icon: Phone,
          text: 'Joan (Encargado) +34 607 764 074'
        },
        {
          icon: Envelope,
          text: 'lina@forsen.es'
        }
      ]  
    },
    form: {
      title: 'Envíanos un correo si lo prefieres',
      sendButtonText: 'Enviar',
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, 'No debe ser menor a 15 caracteres')
          .required('Obligatorio'),
        email: Yup.string().email('Debe ser un email válido').required('Obligatorio'),
        message: Yup.string()
          .min(20, 'No debe ser menor a 20 caracteres')
          .required('Obligatorio')
      }),
      // eslint-disable-next-line no-undef
      onSubmit: values =>
        window.alert(`Form sent with values ${JSON.stringify(values)}`),
      fields: [
        {
          name: 'firstName',
          label: 'Nombre',
          placeholder: 'ie. Joan Garcia ',
          initialValue: '',
          prefix: <Icon icon={User} />
        },
        {
          name: 'phone',
          label: 'Teléfono',
          placeholder: 'ej. 655-678-123',
          initialValue: '',
          prefix: <Icon icon={Phone} />
        },
        {
          name: 'email',
          label: 'E-mail',
          placeholder: 'ej. joan.garcia@email.com',
          type: 'email',
          initialValue: '',
          prefix: <Icon icon={Envelope} />
        },
        {
          name: 'message',
          label: 'Mensaje',
          placeholder: 'Esbribe aquí...',
          multiline: true,
          initialValue: ''
        }
      ]
    }
  },
  footer: {
    title: 'Forsen SL'
  },
  copyright: '© 2020 forsensl'
};
