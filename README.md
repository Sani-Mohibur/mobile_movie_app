# Movie Flex 🍿🎬

## Project Overview

**Movie Flex** is a fully functional, theme-aware mobile application built on the Expo/React Native framework. It allows users to discover trending movies, search the entire catalog, and view detailed information, featuring a modern, dark-first UI optimized for performance and user experience.

| Feature | Status |
| :--- | :--- |
| **Movie Discovery (Home)** | Complete (Infinite Scroll) |
| **Search Functionality** | Complete (Debounced & Paginated) |
| **Movie Details Page** | Complete (Data Formatting & Navigation) |
| **Theming** | Complete (Full Light/Dark Mode Toggle) |
| **App Structure** | Complete (Tab Navigation) |

## App Showcase

| Home Screen (Dark) | Movie Details (Dark) | Profile Screen (Light) |
| :---: | :---: | :---: |
| ![Home Screen Screenshot](https://raw.githubusercontent.com/Sani-Mohibur/mobile_movie_app/main/screenshots/home-dark.png) | ![Movie Details Screenshot](https://raw.githubusercontent.com/Sani-Mohibur/mobile_movie_app/main/screenshots/details-dark.png) | ![Profile Screen Screenshot](https://raw.githubusercontent.com/Sani-Mohibur/mobile_movie_app/main/screenshots/profile-light.png) |

## Tech Stack

This project leverages the modern Expo ecosystem for cross-platform development:

* **Framework:** React Native
* **Platform:** Expo SDK (Managed Workflow)
* **Navigation:** Expo Router (File-System Routing)
* **Styling:** NativeWind (Tailwind CSS for React Native)
* **Data Source:** The Movie Database (TMDb) API (V3/V4 Authorization)
* **Tools:** EAS Build (for generating standalone APK/AAB files)
* **Language:** TypeScript

## Setup and Installation

### Prerequisites

* Node.js (LTS version)
* Expo CLI (`npm install -g expo-cli`)
* EAS CLI (`npm install -g eas-cli`)
* A TMDb API Key (stored in your local `.env` file).

### Local Development

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/Sani-Mohibur/mobile_movie_app.git](https://github.com/Sani-Mohibur/mobile_movie_app.git)
    cd mobile_movie_app
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment:**
    * Create a file named `.env` in the project root.
    * Add your TMDb API Key:
        ```
        EXPO_PUBLIC_MOVIE_API_KEY="YOUR_TMDb_API_KEY"
        ```

4.  **Run the App:**
    ```bash
    npx expo start
    ```
    Scan the QR code with the Expo Go app on your phone.

## Key Features

* **Infinite Scrolling:** Movies are loaded dynamically on the Home screen as the user scrolls to the bottom.
* **Debounced Search:** Search queries are delayed by 500ms to prevent excessive API calls, improving efficiency.
* **Adaptive Theming:** Supports both Dark and Light mode, controlled via the toggle switch on the Settings page, and respects system preferences.
* **Detailed Views:** Displays formatted movie information, including revenue in millions and star rating based on TMDb vote averages.

## Acknowledgments & Data Source

This project would not have been possible without the following resources:

* **Data Source:** Data is powered by [The Movie Database (TMDb)](https://www.themoviedb.org/).
    * *This product uses the TMDb API but is not endorsed or certified by TMDb.*
* **Guidance & Assets:** Project guidance and initial UI assets sourced from [JavaScript Mastery](https://www.jsmastery.pro/).

## Build and Distribution (EAS)

To generate a standalone `.apk` or `.aab` file:

1.  Log in and configure EAS (if not done already):
    ```bash
    eas login
    eas build:configure
    ```
2.  Start the **Preview Build** (recommended for testing/sharing):
    ```bash
    eas build -p android --profile preview
    ```
    A shareable URL will be provided to download the self-contained `.apk` file.

***

### Installation Link (Android APK)

**Direct Download Link (Self-Contained APK):**
[Download Movie Flex APK](https://expo.dev/accounts/farabisunny/projects/mobile_movie_app/builds/eccb7a5f-24cb-4473-9b50-907d37e6aa4c)

**Developer:** Mohibur Rahman Sani
