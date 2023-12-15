# **Tours**

A simple React Project that focuses on the basics of react by displaying some tours that are fetched using the js fetch api.

## **Description**

A simple React Project that focuses on the basics of react by displaying some tours that are fetched using the js fetch api.
Also includes loading functionality and removal from the tours list on the button of the respective tour being clicked.

## **Getting Started**

### Dependencies

- Check package.json for details.
- Git
- Docker(optional)

### Installing

```
git clone https://github.com/axense234/Tours-REACT.git
```

### Executing program

- **Using NPM**

```
npm install
npm start
```

- **Using Docker**

```
docker build -t tours-react:0.3.0 .
docker stop tours-react-app
docker rm tours-react-app
docker run -d -p 3000:3000 --name tours-react-app tours-react:0.3.0
```

## **Authors**

- **axense234**

## **Version History**

- 0.3
  - Analyzed the code to gather to-do tasks and added Docker.
- 0.2
  - Improved folder structure and how the website looks by a ton
  - See [commit change](https://github.com/axense234/Tours-REACT/commits/master) or See [release history](https://github.com/axense234/Tours-REACT/releases)
- 0.1
  - Initial Release

## **License**

This project is licensed under the GNU License - see the LICENSE.md file for details

## **Acknowledgments**

- Inspired by [_John Smilga 15 React Projects_](https://www.youtube.com/watch?v=a_7Z7C_JCyo&t=8s)
