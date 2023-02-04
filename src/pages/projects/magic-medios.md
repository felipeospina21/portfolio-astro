---
layout: ../../layouts/Project.astro
client: 'Magic Medios'
title: 'MagicMedios RPA'
date: 2021-09-25
description: 'Automation tool for quotation process'
role: 'Developer'
image:
  url: '/python.jpg'
  alt: 'Python Language Image'
tags: ['python', 'selenium', 'rpa', 'automation']
links:
  - url: 'https://github.com/felipeospina21/MagicMedios'
    title: 'Github'
---

La necesidad del cliente era reducir el tiempo de generación de cotizaciones. Para esto se creo una aplicación por consola con python y selenium para interactuar con las páginas web de diferentes proveedores (5), y extraer datos de las referencias indicadas por el asesor. Adicional se implemento la extracción por API, en los casos que estaba disponible.

Luego de extraída la información, el robot la organiza en un formato de cotización para la revisión final del asesor comercial.

El tiempo promedio de cotización pasó de 1 hora a 5 minutos (1200%).
