


     //Filtering  image with price, style, type and format //

	 //Creating variable and select elements//

    const filterButtons = document.querySelectorAll('.filter-button');
    const imageItems = document.querySelectorAll('.image-item');
    const imageContainer = document.querySelector('.image-container');


    
	let clikedBy = null;
    let clickedValue= null;

   
	//Create a function //
    //The function is called when button is clicked.//
    const filterList = (event) => {              
    const currentButton = event.currentTarget;
    let currentButtonFilterBy = currentButton.dataset.filterBy;
	let currentButtonFilterValue = currentButton.dataset.filter;

	if (currentButtonFilterValue === clickedValue) {
		currentButtonFilterValue = '*'
	}
    clikedBy = currentButtonFilterBy;

	
	//Creates an array that match the filter criteria.//
    const filteredItems = [...imageItems].filter(item => {       
		if (clickedValue === '*') {
			return true;
		} else {
		
			return item.dataset[currentButtonFilterBy] === currentButtonFilterValue;
		}
	});

	//Clears the content of imageContainer and  then add the filtered image.//
	imageContainer.innerText = '';
	filteredItems.forEach(item => {
		imageContainer.appendChild(item);
	});

	//Adding color to the button when its acctiv//
	filterButtons.forEach(button => {
		button.classList.remove('filter-button--active');
	})


	if (currentButtonFilterValue !== '*') {
		currentButton.classList.add('filter-button--active');
	}
}

    filterButtons.forEach(filterButton => {
	filterButton.addEventListener('click', filterList);
});





  //This function is made so you can click on eash image-item and go to the component//

     const overviewButtons = document.querySelectorAll('.image-item');
     const components = document.querySelectorAll('.component');
     const removeBackgroundItem = document.querySelector(".container");
     const addButtonStyling = document.querySelector(".styling"); 

     
	 
	  overviewButtons.forEach(overviewButton => {
      const displayComponent = (event) => {  // Get the current button that triggered the event//
	  const button = event.currentTarget;            
      const componentToShow = button.dataset.componentToShow; // Get the value of the 'data-component-to-show' attribute from the button//
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
		  tab.textContent = `Frame ${innerText + 1}`;
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
		'assets/frame2.png',
		'assets/frame1.png',
	
	  ]);
	




	


	







	  function backgroundChange(color) {
		document.body.style.background = colorarray[color];
	  }
	 
	  let colorarray = ["#DFE0B3", "#CDDBC6","#E2DED4"];
	  let colorbox = document.querySelector("#colorbox");
	  
	  colorarray.forEach(function (color, innerText) {
		let span = document.createElement("span");
		span.style.backgroundColor = color;
		span.addEventListener("click", function () {
			backgroundChange( innerText);
		});
		colorbox.appendChild(span);
	  });
	  



	











  
  

 


