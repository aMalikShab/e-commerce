from django.db import models
import requests
import base64
import os
import json
from PIL import Image

class Product(models.Model):
    item_title = models.CharField(max_length=50)
    item_desc = models.TextField()
    item_price = models.IntegerField()
    item_image = models.ImageField(upload_to="post_images", default="default.png")
    item_image_url = models.TextField(default="/media/default.png")

    def save(self):
        super().save()
        img = Image.open(self.item_image.path)  # Open image using self

        if img.height > 300 or img.width > 300:
            new_img = (300, 300)
            img.thumbnail(new_img)
            img.save(self.item_image.path)

        encodedString = base64.b64encode(self.item_image.file.read())
        data = {"key": os.environ.get("IMG_BB"), "image": encodedString.decode("utf-8")}
        uploadedImageInfo = requests.post("https://api.imgbb.com/1/upload", data=data)
        jsonResponse = json.loads(uploadedImageInfo.text)
        self.item_image_url = jsonResponse["data"]["display_url"]
        super().save()

    def __str__(self):
        return self.item_title
