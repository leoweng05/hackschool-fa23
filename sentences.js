const improveTyping = async(didPractice) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (didPractice){
                resolve(80);
            }
            else {
                reject (new Error("i failed"));
            }
        }, 2000)
    }
    )
}

improveTyping(true)
    .then