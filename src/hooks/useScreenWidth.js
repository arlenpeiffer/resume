import facepaint from "facepaint"

const useScreenWidth = () => {
  return facepaint([
    "@media(min-width: 320px)",
    "@media(min-width: 425px)",
    "@media(min-width: 600px)",
    "@media(min-width: 1300px)",
    "@media(min-width: 1580px)",
    "@media(min-width: 1720px)",
  ])
}

export default useScreenWidth
