from django.contrib import admin
from apps.inventory.models import Producto, Inventario, TransaccionInventario

# Register your models here.
admin.site.register(Producto)
admin.site.register(Inventario)
admin.site.register(TransaccionInventario)
