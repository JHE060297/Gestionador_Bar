from rest_framework import serializers
from .models import Producto, Inventario, TransaccionInventario


class ProductoSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Producto
        fields = [
            "id_producto",
            "nombre_producto",
            "descripcion",
            "precio_compra",
            "precio_venta",
            "image",
            "image_url",
            "is_active",
        ]

    def get_image_url(self, obj):
        if obj.image:
            request = self.context.get("request")
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None


class InventarioSerializer(serializers.ModelSerializer):
    nombre_producto = serializers.CharField(source="id_producto.nombre_producto", read_only=True)
    nombre_sucursal = serializers.CharField(source="id_sucursal.nombre_sucursal", read_only=True)
    is_low_stock = serializers.BooleanField(read_only=True)

    class Meta:
        model = Inventario
        fields = [
            "id_inventario",
            "id_producto",
            "nombre_producto",
            "id_sucursal",
            "nombre_sucursal",
            "cantidad",
            "alerta",
            "is_low_stock",
        ]


class TransaccionInventarioSerializer(serializers.ModelSerializer):
    nombre_producto = serializers.CharField(source="id_producto.nombre_producto", read_only=True)
    nombre_sucursal = serializers.CharField(source="id_sucursal.nombre_sucursal", read_only=True)
    nombre_usuario = serializers.CharField(source="id_usuario.get_full_name", read_only=True)

    class Meta:
        model = TransaccionInventario
        fields = [
            "id_transaccion",
            "id_producto",
            "nombre_producto",
            "id_sucursal",
            "nombre_sucursal",
            "cantidad",
            "tipo_transaccion",
            "transaccion_fecha_hora",
            "id_usuario",
            "nombre_usuario",
        ]
        read_only_fields = ["transaccion_fecha_hora"]
