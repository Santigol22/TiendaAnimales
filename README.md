# Mascotas Felices - Tienda de Productos para Animales

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)

## Descripción

Sitio web responsive para una tienda de productos para mascotas, desarrollado con tecnologías modernas sin backend.

## Estructura del Proyecto

```
tiendaAnimales/
├── index.html          # Archivo principal HTML
├── style.css          # Estilos personalizados
├── script.js          # Funcionalidad JavaScript
├── README.md          # Documentación del proyecto
└── assets/            # Recursos (imágenes, iconos)
```

## Características

### Funcionalidades Principales
- **Navbar Responsive**: Menú de navegación adaptativo con buscador integrado
- **Carrito de Compras**: Sistema completo de gestión de carrito (agregar, eliminar, actualizar cantidades)
- **Filtros por Categoría**: Filtrado de productos por tipo de mascota
- **Buscador en Tiempo Real**: Búsqueda instantánea de productos
- **Formulario de Registro**: Validaciones HTML5 y CSS
- **Testimonios**: Sección de clientes satisfechos
- **FAQ**: Preguntas frecuentes con acordión interactivo

### Secciones del Sitio
1. Header - Navbar con logo, menú y carrito
2. Hero Section - Banner principal con llamada a la acción
3. Productos - Catálogo de 12 productos con cards interactivas
4. Categorías - Cards visuales para Perros, Gatos, Aves, Peces
5. Registro - Formulario de usuario con validaciones
6. Testimonios - Reseñas de clientes
7. FAQ - Preguntas frecuentes
8. Contacto - Información de contacto
9. Footer - Redes sociales y enlaces

### Elementos Extra
- Botón flotante de WhatsApp
- Botón "Volver arriba"
- Animaciones suaves y transiciones
- Diseño responsive (móvil, tablet, desktop)
- Toast de notificaciones al agregar productos

## Tecnologías Utilizadas

| Tecnología | Versión |
|------------|---------|
| HTML5 | - |
| CSS3 | - |
| JavaScript | ES6+ |
| Bootstrap | 5.3.2 |
| Bootstrap Icons | 1.11.1 |

## Imágenes

Todas las imágenes provienen de **Unsplash** y son de alta calidad relacionadas con mascotas y productos animales.

## Cómo Ejecutar

1. Clonar o descargar el repositorio
2. Abrir `index.html` en cualquier navegador moderno
3. No requiere servidor web ni dependencias adicionales

## Navegadores Soportados

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)

## Funcionalidad del Carrito

```javascript
// Agregar producto
addToCart(productId)

// Eliminar producto
removeFromCart(productId)

// Actualizar cantidad
updateQuantity(productId, change)

// Finalizar compra
checkout()
```

## Licencia

Este proyecto es de uso educativo y personal.

---

**Desarrollado con ❤️ para los amantes de las mascotas**