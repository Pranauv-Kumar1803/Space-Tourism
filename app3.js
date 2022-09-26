// let moon = document.getElementById('moon');
// let mars = document.getElementById('mars');
// let europa = document.getElementById('europa');
// let titan = document.getElementById('titan');

let btns = document.getElementsByTagName('button');
// console.log(btns);

Array.from(btns).forEach(e=>{
	e.addEventListener('click',()=>{
		p=e.innerHTML;
		console.log(p);
		if(p==='3')
		{
            // console.log(document.getElementById('Commander'));
			document.getElementById('Vehicle').style.display='none';
			document.getElementById('Spaceport').style.display='none';
			document.getElementById('Capsule').style.display='grid';
		}
		if(p==='2')
		{   
            // console.log(document.getElementById('Engineer'));
            document.getElementById('Vehicle').style.display='none';
            document.getElementById('Spaceport').style.display='grid';
            document.getElementById('Capsule').style.display='none';
		}
		if(p==='1')
		{
            // console.log(document.getElementById('Specialist'));
            document.getElementById('Vehicle').style.display='grid';
            document.getElementById('Spaceport').style.display='none';
            document.getElementById('Capsule').style.display='none';
		}
	})
})