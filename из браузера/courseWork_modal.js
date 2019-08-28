

class Popup {
    constructor(isModalOpen) {
        this.isModalOpen = false;   
    }

    Show() {
        if (this.isModalOpen = false) {
            document.getElementById('myModal').style.display = "none";
        }  else {
            document.getElementById('myModal').style.display = "block";
        }
        console.log(this)
    }


    render(target) {
        const modal = document.createElement('div');
        modal.innerHTML = `
    <div style="width:50%; height:350px; overflow:auto; margin: 0 auto; border: 1px; display: none;z-index: 1;" id="myModal">${this.isModalOpen}
   <input id="file_upload" type="file" accept="image/*">
    <button type="submit" class="_save"></button>
    </div>
    `;
        
    target.appendChild(modal)
    
    let myButton = document.querySelector('.myButton');
        myButton.addEventListener('click', () => {
            this.Show()
        });


    };

}

let myModal = document.getElementById('myPopupModal');
let y = new Popup();
y.render(myModal);



let storage = [];

class MyLogo extends Popup {
    constructor(isModalOpen) {
        super(isModalOpen);
        this.id = id;


        this.browseWindow = this.browseWindow.bind(this);

        storage.push(this);
        this.saveToStorage();

    }

    saveToStorage(id) {
        localStorage.setItem('storage', JSON.stringify(storage));
    }

    browseWindow() {
        if (this.isModalOpen != false) {
            var f = [];
            for (i = 0; i < this.files.length; i++) {
                f[i] = new FileReader();
                f[i].onload = function () {
                    var img = document.createElement('img');
                    img.src = this.result;
                    img.style.margin = "20px";
                    img.style.width = "200px";
                    img.style.height = "90px";
                    img.style.borderRadius = "10px";
                    document.getElementById('myButton').appendChild(img);
                };

                f[i].readAsDataURL(this.files[i]);
                console.log(this.files)
            }
        }

    }

    render() {
        let newLogo = document.getElementById('file_upload');
        newLogo.addEventListener('change', function(e) {
            e.preventDefault();
            this.browseWindow();
        });

    }
}
const localData = localStorage.getItem('storage');
if(localData !== 0) {
    let classData = JSON.parse(localData).map(item => {
        let cl_item = new MyLogo(item);
        cl_item.render();
        return cl_item;
    });
    storage  = classData;
}
console.log(storage);

let myButton = document.querySelector('._save');
let x = new MyLogo('');
x.render(myButton);

