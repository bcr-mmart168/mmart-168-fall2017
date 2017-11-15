const apiKey = 'MW9S-E7SL-26DU-VV8V'

const makeStationList = () => {
    const url = 'https://api.bart.gov/api/stn.aspx?key=' + apiKey +
                    '&cmd=stns&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
          //0. Get data and print it to the web console.
          json = json.root
          console.log(json)

            json.stations.station.forEach((station) => {
              //1. Create the elment you want to add to the DOM.
              const option = document.createElement("option")

              //2. Assign data to some part of the element:
              option.innerHTML = station.name
               option.value = station.abbr

              //3. Append the newly created element to the DOM somewhere:
              document.getElementById('station_list').appendChild(option)
            })
          })
        .catch((err) => {
            console.log(err)
        })
      }

      makeStationList()

      const getArrivalTimes = () => {
        // go out and find the element with the ID stationList (which is a select
        // element) and store it in a variable called stationList.
        const stationList = document.getElementById('station_list')

        // get the stationList's selected value
        const bartStationCode = stationList.value

        // print it to the screen:
        //console.log(bartStationCode)
        console.log('Selected Station Code:', bartStationCode)
        let url = 'https://api.bart.gov/api/etd.aspx?key=MW9S-E7SL-26DU-VV8V&cmd=etd&orig=' +
        bartStationCode + '&json=y'
        fetch(url)
            .then((response) => {
              return response.json()
            })
            .then((json) => {
              json = json.root

              //1. clear out existing div:
              document.getElementById('results').innerHTML = ''

              //2. add header that shwos the selection station name:
              const header = document.createElement("h2")
              header.innerHTML = json.station[0].name
              document.getElementById('results').appendChild(header)

              //3. log all of the train lines:
              json.station[0].etd.forEach((line) => {

                // print name of train line to p tag and append to the DOM:
                const trainLine = document.createElement("p")
                trainLine.innerHTML = line.destination

                // also add the platform
                trainLine.innerHTML += ': Platform #' + line.estimate[0].platform

                // also add the direction:
                  trainLine.innerHTML +=' (' + line.estimate[0].direction + ')'

                // now append to the DOM:
                document.getElementById('results').appendChild(trainLine)

                // now add the color of the train:
                const square = document.createElement("span")
                square.style.borderColor = line.estimate[0].hexcolor
                square.classList.add('train.square')
                document.getElementById('results').appendChild(square)

                //4. log all of the estimates for each train lines:
                line.estimate.forEach((estimate) => {
                  console.log('Estimate:', estimate)

                  // encapsulate each time estimate in a span tag
                  const departureTime = document.createElement("span")
                  departureTime.innerHTML = estimate.minutes
                  document.getElementById('results').appendChild(departureTime)
                })
              })
            })
            .catch((err) => {
              console.log(err)
            })
          }


/*
const getArrivalTimes = () => {
    const stationList = document.getElementById('station_list')
    // PART III.B.1: The bartStationCode should read from the list and query
    // for the corresponding station
    const bartStationCode = 'DBRK'
    console.log('Selected Station Code:', bartStationCode)
    let url = 'https://api.bart.gov/api/etd.aspx?key=' + apiKey + '&cmd=etd' +
                '&orig=' + bartStationCode + '&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json = json.root
            console.log(json)
            const results = document.getElementById('results')
            results.innerHTML = ''
            json.station = json.station[0]
            if (!Array.isArray(json.station.etd)) {
                json.station.etd = [ json.station.etd ]
            }
            json.station.etd.forEach(trainLine => {
                if (!Array.isArray(trainLine.estimate)) {
                    trainLine.estimate = [ trainLine.estimate ]
                }
                // PART III.B.2: Instead of printing this info to the console,
                // output it to the DOM
                console.log('------------------------------------------------------------------------')
                console.log('FROM:', stationList.options[stationList.selectedIndex].text.toUpperCase())
                console.log('TO:', trainLine.destination.toUpperCase())
                console.log('------------------------------------------------------------------------')
                trainLine.estimate.forEach(estimate => {
                    // PART III.B.2. Instead of printing this info to the console,
                    // output it to the DOM
                    console.log(
                        ' * Direction:', estimate.direction,
                        ', Leaving: ', estimate.minutes,
                        ', Color: ', estimate.hexcolor,
                        ', Platform:', estimate.platform,
                        ', Delay?:', estimate.delay
                    )
                })
            })
        })
        .catch((err) => {
            console.log(err)
        })
}
*/
