const getOptimizedImageUrl = (url: string) => {
  // sample url = https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg
  // *** Get the index up to /media/
  // *** Get the whole string up to /media/ then add "crop/600/400"
  // *** Add the remaining characters after /media/
  const target = "/media/"
  const index = url.indexOf(target) + target.length
  console.log(index)
  const optimizedUrl = url.slice(0, index) + "crop/600/400/" + url.substring(index)
  console.log(optimizedUrl)

  return optimizedUrl
}

export default getOptimizedImageUrl
