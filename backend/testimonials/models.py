from django.db import models


class Testimonial(models.Model):
    author = models.CharField(max_length=100)
    text = models.TextField()

    def __str__(self):
        return self.author
