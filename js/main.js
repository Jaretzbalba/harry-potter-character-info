
document.getElementById('wand-button').addEventListener('click', getFetch)

function getFetch(){

  let name = document.querySelector('input').value
  name = capFirstLetter(name)
  const url = `http://hp-api.herokuapp.com/api/characters`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.find(char => char.name === `${name}`))
        
        charArray = data.find(char => char.name === `${name}`)

        document.querySelector('#name').textContent = charArray.name
        document.querySelector('#image').src = charArray.image
        document.querySelector('#house').textContent = charArray.house
        document.querySelector('#patronus').textContent = `Patronus: ${charArray.patronus}`
        let audio = document.getElementById("audioID")
        audio.play()
  

      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}

function capFirstLetter(name) {
  return name.split(' ').map(elem => elem[0].toUpperCase() + elem.slice(1)).join(' ')
}



