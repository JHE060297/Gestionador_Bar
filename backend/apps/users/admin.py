from django.contrib import admin
from apps.users.models import Usuario, Rol

# Register your models here.
admin.site.register(Usuario)
admin.site.register(Rol)
