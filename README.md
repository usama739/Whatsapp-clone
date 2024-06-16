# WhatsApp-like Chat Application


![Whatsapp UI](https://github.com/usama739/whatsapp-clone/assets/89732076/93d2babd-5464-45ec-9689-07a9a9f3f3cf)


This is a WhatsApp-like chat application built using the MERN stack (MongoDB, Express.js, React, Node.js) with real-time messaging functionality powered by Pusher.



## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-time updates**: Pusher

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install server dependencies**:
    ```bash
    cd backend
    npm install
    ```

3. **Install client dependencies**:
    ```bash
    cd ../frontend
    npm install
    ```

## Setup

1. **Backend Configuration**:
   - Create a `.env` file in the `backend` directory and add the following environment variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=your_server_port
     PUSHER_APP_ID=your_pusher_app_id
     PUSHER_KEY=your_pusher_key
     PUSHER_SECRET=your_pusher_secret
     PUSHER_CLUSTER=your_pusher_cluster
     ```

2. **Frontend Configuration**:
   - Create a `.env` file in the `frontend` directory and add the following environment variables:
     ```env
     REACT_APP_PUSHER_KEY=your_pusher_key
     REACT_APP_PUSHER_CLUSTER=your_pusher_cluster
     ```

## Running the Application

1. **Start the backend server**:
    ```bash
    cd backend
    npm start
    ```

2. **Start the frontend server**:
    ```bash
    cd ../frontend
    npm start
    ```

3. **Open your browser** and navigate to `http://localhost:3000`.
