const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
    run: ["01-01", "01-02", '01-06', '01-07', '01-08', '01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15', '01-16'],
    takePills: ['01-03'],
    journal: ['01-02']
}

nlwSetup.setData(data)
nlwSetup.load()