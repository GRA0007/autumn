let dark_toggle = document.getElementById('dark_toggle');

dark_toggle.onclick = function() {
	if (document.body.classList.contains('dark')) {
		this.innerHTML = "Dark mode";
		document.body.classList.remove('dark');
	} else {
		this.innerHTML = "Light mode";
		document.body.classList.add('dark');
	}
	return false;
};

function getProjects() {
	var request = new XMLHttpRequest();

	if (!request) {
		return false;
	}
	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				alert(request.responseText);
			} else {
				alert('There was a problem with the request.');
			}
		}
	};
	request.open('GET', 'https://api.harvestapp.com/v2/users/2457945/project_assignments');
	request.setRequestHeader('Harvest-Account-ID', '543778');
	request.setRequestHeader('User-Agent', 'Harvest API testing for Autumn (ben@conducthq.com)');
	request.setRequestHeader('Authorization', 'Bearer 1805146.pt.nu22Dg4SH6m-7iLqZ7JVHPhwOp4NAyp5aHLv7B1Kr4odHy0xOdJ2LUu26ZhLilcuFmNcc88oOLxY6JtMSlAQiw');
	request.send();
}
