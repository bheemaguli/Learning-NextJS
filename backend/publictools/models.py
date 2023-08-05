from django.db import models

# Create your models here.

class CountryCodes(models.Model):
    country = models.CharField("Country Name", blank=False)
    country_code = models.CharField("Country Code", blank=False)
    iso_code_2 = models.CharField("ISO 2 Letter Code", max_length=2, blank=False)
    iso_code_3 = models.CharField("ISO 3 Letter Code", max_length=3, db_index=False)
    population = models.IntegerField("Population of the country", blank=True, null=True)
    area = models.IntegerField("Area of the country (in sq kms)", blank=True, null=True)
    gdp = models.IntegerField("GDP of the country in $USD", blank=True, null=True)
