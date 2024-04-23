# Todo Website React Ts and Django Rest API

## Getting Started

Follow these instructions to set up the virtual environment and run the Django Rest API on your local machine.



### Installation
Clone the repository:
```bash
https://github.com/Ashmil114/HATIO.git
```

## Back End Set Up
Navigate to the project directory:
```bash
cd backEnd
```
### Set up Virtual Environment
Activate virtual environment:
window:
```bash
env\Scripts\activate
```
linux:
```bash
source env/bin/activate
``` 
if already exists file env doesn't work , please delete that file and create a new  virtual environment then repeat same activate instructions
Create a virtual environment:
```bash
python -m venv env
```

Install dependencies:

```bash
cd server
pip install -r requirements.txt
```

### Run the Django Rest API
Run the development server:
```bash
python manage.py make migrations
python manage.py migrate
python manage.py runserver
```

The API will be available at http://127.0.0.1:8000/api by default.
