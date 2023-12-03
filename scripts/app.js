


const filterButtons = document.querySelectorAll('.filter-button');
const listItems = document.querySelectorAll('.list-item');
const listItemsContainer = document.querySelector('.list-items');

let lastClickedFilterBy = null;
let lastClickedFilterValue = null;

const filterList = (event) => {
const currentButton = event.currentTarget;

let buttonFilterBy = currentButton.dataset.filterBy;
let buttonFilterValue = currentButton.dataset.filter;

	if (buttonFilterValue === lastClickedFilterValue) {
		buttonFilterValue = '*'
	}

	lastClickedFilterBy = buttonFilterBy;
	lastClickedFilterValue = buttonFilterValue;

	const filteredItems = [...listItems].filter(item => {
		if (lastClickedFilterValue === '*') {
			return true;
		} else {
		
			return item.dataset[buttonFilterBy] === buttonFilterValue;
		}
	});


	listItemsContainer.innerHTML = '';
	

	filteredItems.forEach(item => {
		listItemsContainer.appendChild(item);
	});

	
	filterButtons.forEach(button => {
		button.classList.remove('filter-button--active');
	})


	if (buttonFilterValue !== '*') {
		currentButton.classList.add('filter-button--active');
	}
}

filterButtons.forEach(filterButton => {
	filterButton.addEventListener('click', filterList);
});








const overviewButtons = document.querySelectorAll('.list-item');
const components = document.querySelectorAll('.component');
const removeBackgroundItem = document.querySelector(".container");
const addButtonStyling = document.querySelector(".styling"); 

 overviewButtons.forEach(overviewButton => {
 const displayComponent = (event) => {
 const button = event.currentTarget;
 const componentToShow = button.dataset.componentToShow;


 removeBackgroundItem.style.display = "none";
 addButtonStyling.style.visibility = "visible";
    

     components.forEach(component => {
     component.classList.remove('component--visible');

     const componentName = component.dataset.componentName;

 if (componentName === componentToShow) {
            component.classList.add('component--visible');
          }
        });
      }

      overviewButton.addEventListener('click', displayComponent);
    });


     
	 

	

	function createTabsAndGallery(containerId,imageUrls) {
		const tabsContainer = document.getElementById(`tabs${containerId}`);
		const galleryContainer = document.getElementById(`gallery${containerId}`);
		

	
		imageUrls.forEach((imageUrl, innerText) => {
		
		  const tab = document.createElement('div');
		  tab.classList.add('tab');
		  tab.textContent = `Tab ${innerText + 1}`;
		  tab.addEventListener('click', () => showImage(containerId, innerText));
		  tabsContainer.appendChild(tab);

		  const galleryItem = document.createElement('div');
		  galleryItem.classList.add('gallery-item');
		  const img = document.createElement('img');
		  img.src = imageUrl;
		  img.classList.add('gallery-image');
		  galleryItem.appendChild(img);
		  galleryContainer.appendChild(galleryItem);
		});
	
		showImage(containerId, 0);
	  }
	
	  function showImage(containerId, innerText) {
		const tabs = document.querySelectorAll(`#tabs${containerId} .tab`);
		const galleryImages = document.querySelectorAll(`#gallery${containerId} .gallery-image`);
	
		tabs.forEach(tab => tab.classList.remove('active'));
		tabs[innerText].classList.add('active');
	
		galleryImages.forEach(image => image.style.display = 'none');
		galleryImages[innerText].style.display = 'block';
	  }
	
	  createTabsAndGallery(1, [
		'assets/frame1.png',
		'assets/frame2.png',
	
	  ]);
	


	

	
	

	  function backgroundChange(color) {
		let colorarray = ["#DFE0B3", "#CDDBC6", "#E2DED4" ];
		document.body.style.background = colorarray[color];
	  }
	  
	  let colorarray = ["#DFE0B3", "#CDDBC6","#E2DED4"];
	  let colorbox = document.getElementById("colorbox");
	  
	  colorarray.forEach(function (color, innerText) {
		let span = document.createElement("span");
		span.style.backgroundColor = color;
		span.addEventListener("click", function () {
			backgroundChange( innerText);
		});
		colorbox.appendChild(span);
	  });
	  



	











  
  

 


