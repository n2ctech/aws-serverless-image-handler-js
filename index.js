var btoa = require("btoa")
const domain = "https://d3agnindsvffewf0.cloudfront.net/" // your cloudfront url

const returnUrlForKey = key => {
  const request = {
    bucket: "s3-bucket-name", // S3 bucket name
    key, // path to your file on the S3 bucket (ex. photos/face1.png)
    edits: {
      // smartCrop: true, // uncomment to crop around first face, will return nothing if no face is found
      normalize: true,
      grayscale: true,
      sharpen: true,
      blur: 5,
      rotate: 180,
      resize: {
        width: 300,
        height: 300,
        fit: "cover"
      }
    }
  }
  const strRequest = JSON.stringify(request)
  const encRequest = btoa(strRequest)
  let url = `${domain}${encRequest}` // the image url

  return url
}

console.log(returnUrlForKey("test.jpg"))
