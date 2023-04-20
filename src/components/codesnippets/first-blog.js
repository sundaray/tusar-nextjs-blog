export const code = `const example = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const succeed = Math.random() < 0.5
          if (succeed) {
            console.log("resolving with 24 (will fulfill the promise)")
            resolve(24)
          } else {
            console.log("rejecting with new Error ('failed')")
            throw new Error("failed")
          }
        } catch (error) {
          reject(error)
        }
      }, 100)
    })
  }`;
