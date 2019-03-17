# Install django

```
curl -O https://raw.github.com/pypa/virtualenv/master/virtualenv.py
python virtualenv.py dev_env
. dev_env/bin/activate

# with 'dev_env' environment active
pip install django
django-admin.py startproject mysite
python manage.py runserver 192.168.1.100:8080

# when finish with changes
deactivate
```
