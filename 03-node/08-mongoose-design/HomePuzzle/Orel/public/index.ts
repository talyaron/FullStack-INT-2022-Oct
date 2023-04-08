function handleOnLoad(){
    try {
        const rootGradesContainer:HTMLElement | null = document.getElementById('rootGradesContainer')!
        if(!rootGradesContainer) throw new Error('no found rootGradesContainer HTMLElement')
rootGradesContainer.innerHTML =  renderAllGrade()
    } catch (error) {
        console.error(error)
    }
}
