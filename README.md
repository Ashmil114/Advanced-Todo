
# Todo Website By Using React ts and Django

## Getting Started

Follow below instructions to set up 



### Installation
Clone the repository:
```bash
https://github.com/Ashmil114/HATIO.git
```

## BackEnd Set Up
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
Now you can see API Endpoints

## FrontEnd Set Up
Navigate to the project directory:
```bash
cd frontEnd
```
Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

Install dependencies:

```bash
npm install
```
Start the development server:
```bash
npm run dev
```
## Setup .env 
Create a .env.local file in the root directory and add a variable named VITE_REACT_APP_TOKEN, assigning it your github Token (otherwise save as gist doesn't work)

The Output will be available at http://localhost:5173/ by default.

Note : The Frontend Deployment not work properly because of the Backend didn't deployed yet (so https://hatio.vercel.app/ only for sample)

if You have any doubt please Connect with me (ashmilk114@gmail.com)
### Thank You
