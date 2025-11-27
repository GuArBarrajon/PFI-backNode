# Backend API - Node.js + Express

Backend REST API construido con Node.js, Express y Firebase para la gestión de productos y autenticación.

## 🚀 Características

- **Autenticación JWT**: Sistema de login y gestión de sesiones
- **Gestión de Productos**: Creación, edición y eliminación de productos
- **CORS**: Configurado para aceptar peticiones del frontend
- **Base de datos**: Firebase

## 📦 Dependencias principales

```json
{
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "firebase": "^12.6.0",
    "jsonwebtoken": "^9.0.2"
}
```

## 🛣️ Endpoints de la API

### Autenticación

#### Login
```http
POST /api/login
Content-Type: application/json

{
  "email": "test@gmail.com",
  "password": "123456"
}
```

**Respuesta:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
}
```

### Productos

#### Obtener todos los productos
```http
GET /api/products
```

#### Obtener producto por ID
```http
GET /api/products/:id
```

#### Crear producto (requiere autenticación)
```http
POST /api/products/create
Authorization: Bearer <token>
Content-Type: application/json

{
  "nombre": "Producto ejemplo",
  "precio": 99.99,
  "categoria": "Electrónica"
}
```

#### Actualizar producto
```http
PUT /api/products/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "nombre": "Producto actualizado",
  "precio": 89.99,
  "categoria": "Electrónica" 
}
```

#### Eliminar producto
```http
DELETE /api/products/:id
Authorization: Bearer <token>
```

## 🗄️ Modelos de datos

### Producto
```javascript
{
  nombre: String,
  precio: Number,
  categoria: String,
}
```

## 🔒 Middleware de autenticación

Para proteger rutas, se utiliza el middleware `authentication`:

```javascript
import { authentication } from "./src/middleware/authentication.js";

router.get('/ruta-protegida', authentication, (req, res) => {
  // El usuario autenticado está disponible en req.usuario
});
```

## 📝 Scripts disponibles

```bash

# Iniciar en modo producción
npm start

```

## 🐛 Manejo de errores

La API devuelve errores en el siguiente formato:

Códigos de estado HTTP:
- `200`: Operación exitosa
- `201`: Recurso creado
- `400`: Error de validación
- `401`: No autenticado
- `403`: No autorizado
- `404`: Recurso no encontrado
- `500`: Error del servidor

## 👤 Autor

Gustavo Ariel Barrajón
