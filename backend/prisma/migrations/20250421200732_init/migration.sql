-- CreateEnum
CREATE TYPE "DocumentoIdentidad" AS ENUM ('DNI', 'PASAPORTE', 'LICENCIA');

-- CreateEnum
CREATE TYPE "Nacionalidad" AS ENUM ('PARAGUAY', 'BRASIL', 'ARGENTINA', 'OTRO');

-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "nombre_usuario" TEXT NOT NULL,
    "contrasena_hash" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Huesped" (
    "id_huesped" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "documento_identidad" "DocumentoIdentidad" NOT NULL,
    "numero_documento" TEXT NOT NULL,
    "ruc" TEXT,
    "nacionalidad" "Nacionalidad" NOT NULL,
    "telefono" TEXT,
    "email" TEXT,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Huesped_pkey" PRIMARY KEY ("id_huesped")
);

-- CreateTable
CREATE TABLE "TipoHabitacion" (
    "id_tipo_habitacion" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "capacidad" INTEGER NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TipoHabitacion_pkey" PRIMARY KEY ("id_tipo_habitacion")
);

-- CreateTable
CREATE TABLE "Tarifa" (
    "id_tarifa" SERIAL NOT NULL,
    "fk_tipo_habitacion" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" INTEGER NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tarifa_pkey" PRIMARY KEY ("id_tarifa")
);

-- CreateTable
CREATE TABLE "Habitacion" (
    "id_habitacion" SERIAL NOT NULL,
    "numero" TEXT NOT NULL,
    "fk_tipo_habitacion" INTEGER NOT NULL,
    "piso" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Habitacion_pkey" PRIMARY KEY ("id_habitacion")
);

-- CreateTable
CREATE TABLE "Reserva" (
    "id_reserva" SERIAL NOT NULL,
    "fk_huesped" INTEGER NOT NULL,
    "fk_tipo_habitacion" INTEGER NOT NULL,
    "check_in" TIMESTAMP(3) NOT NULL,
    "check_out" TIMESTAMP(3) NOT NULL,
    "estado" TEXT NOT NULL,
    "fk_usuario" INTEGER NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id_reserva")
);

-- CreateTable
CREATE TABLE "Ingreso" (
    "id_ingreso" SERIAL NOT NULL,
    "fk_reserva" INTEGER,
    "fk_habitacion" INTEGER NOT NULL,
    "fk_huesped" INTEGER NOT NULL,
    "fk_tarifa" INTEGER NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "estado" TEXT NOT NULL,
    "fk_usuario" INTEGER NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ingreso_pkey" PRIMARY KEY ("id_ingreso")
);

-- CreateTable
CREATE TABLE "HuespedHabitacion" (
    "id_huesped_habitacion" SERIAL NOT NULL,
    "fk_huesped" INTEGER NOT NULL,
    "fk_ingreso" INTEGER NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HuespedHabitacion_pkey" PRIMARY KEY ("id_huesped_habitacion")
);

-- CreateTable
CREATE TABLE "Cuenta" (
    "id_cuenta" SERIAL NOT NULL,
    "fk_ingreso" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cuenta_pkey" PRIMARY KEY ("id_cuenta")
);

-- CreateTable
CREATE TABLE "Consumo" (
    "id_consumo" SERIAL NOT NULL,
    "fk_cuenta" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "monto" INTEGER NOT NULL,
    "fk_usuario" INTEGER NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Consumo_pkey" PRIMARY KEY ("id_consumo")
);

-- CreateTable
CREATE TABLE "Timbrado" (
    "id_timbrado" SERIAL NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3) NOT NULL,
    "codigo_sucursal" INTEGER NOT NULL,
    "codigo_punto_facturacion" INTEGER NOT NULL,
    "numero_secuencial" INTEGER NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Timbrado_pkey" PRIMARY KEY ("id_timbrado")
);

-- CreateTable
CREATE TABLE "Factura" (
    "id_factura" SERIAL NOT NULL,
    "fk_cuenta" INTEGER NOT NULL,
    "fk_timbrado" INTEGER NOT NULL,
    "fecha_emision" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "condicion_venta" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "fk_usuario" INTEGER NOT NULL,

    CONSTRAINT "Factura_pkey" PRIMARY KEY ("id_factura")
);

-- CreateTable
CREATE TABLE "DetalleFactura" (
    "id_detalle_factura" SERIAL NOT NULL,
    "fk_factura" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio_unitario" INTEGER NOT NULL,
    "descuento" INTEGER NOT NULL,
    "porcentaje_iva" INTEGER NOT NULL,

    CONSTRAINT "DetalleFactura_pkey" PRIMARY KEY ("id_detalle_factura")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nombre_usuario_key" ON "Usuario"("nombre_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Huesped_numero_documento_key" ON "Huesped"("numero_documento");

-- AddForeignKey
ALTER TABLE "Tarifa" ADD CONSTRAINT "Tarifa_fk_tipo_habitacion_fkey" FOREIGN KEY ("fk_tipo_habitacion") REFERENCES "TipoHabitacion"("id_tipo_habitacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habitacion" ADD CONSTRAINT "Habitacion_fk_tipo_habitacion_fkey" FOREIGN KEY ("fk_tipo_habitacion") REFERENCES "TipoHabitacion"("id_tipo_habitacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_fk_huesped_fkey" FOREIGN KEY ("fk_huesped") REFERENCES "Huesped"("id_huesped") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_fk_tipo_habitacion_fkey" FOREIGN KEY ("fk_tipo_habitacion") REFERENCES "TipoHabitacion"("id_tipo_habitacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_fk_usuario_fkey" FOREIGN KEY ("fk_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingreso" ADD CONSTRAINT "Ingreso_fk_reserva_fkey" FOREIGN KEY ("fk_reserva") REFERENCES "Reserva"("id_reserva") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingreso" ADD CONSTRAINT "Ingreso_fk_habitacion_fkey" FOREIGN KEY ("fk_habitacion") REFERENCES "Habitacion"("id_habitacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingreso" ADD CONSTRAINT "Ingreso_fk_huesped_fkey" FOREIGN KEY ("fk_huesped") REFERENCES "Huesped"("id_huesped") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingreso" ADD CONSTRAINT "Ingreso_fk_tarifa_fkey" FOREIGN KEY ("fk_tarifa") REFERENCES "Tarifa"("id_tarifa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingreso" ADD CONSTRAINT "Ingreso_fk_usuario_fkey" FOREIGN KEY ("fk_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HuespedHabitacion" ADD CONSTRAINT "HuespedHabitacion_fk_huesped_fkey" FOREIGN KEY ("fk_huesped") REFERENCES "Huesped"("id_huesped") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HuespedHabitacion" ADD CONSTRAINT "HuespedHabitacion_fk_ingreso_fkey" FOREIGN KEY ("fk_ingreso") REFERENCES "Ingreso"("id_ingreso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cuenta" ADD CONSTRAINT "Cuenta_fk_ingreso_fkey" FOREIGN KEY ("fk_ingreso") REFERENCES "Ingreso"("id_ingreso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consumo" ADD CONSTRAINT "Consumo_fk_cuenta_fkey" FOREIGN KEY ("fk_cuenta") REFERENCES "Cuenta"("id_cuenta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consumo" ADD CONSTRAINT "Consumo_fk_usuario_fkey" FOREIGN KEY ("fk_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Factura" ADD CONSTRAINT "Factura_fk_cuenta_fkey" FOREIGN KEY ("fk_cuenta") REFERENCES "Cuenta"("id_cuenta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Factura" ADD CONSTRAINT "Factura_fk_timbrado_fkey" FOREIGN KEY ("fk_timbrado") REFERENCES "Timbrado"("id_timbrado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Factura" ADD CONSTRAINT "Factura_fk_usuario_fkey" FOREIGN KEY ("fk_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleFactura" ADD CONSTRAINT "DetalleFactura_fk_factura_fkey" FOREIGN KEY ("fk_factura") REFERENCES "Factura"("id_factura") ON DELETE RESTRICT ON UPDATE CASCADE;
