$(function () {
  "use strict";

  $("#example1").DataTable({
    paging: true,
    lengthChange: false,
    searching: false,
    ordering: true,
    info: true,
    autoWidth: false,
		scrollX: true,
		responsive: false,
    columns: [
			{width: '40%'},
			{width: '40%'},
			{width: '40%'},
			{width: '40%'},
			{width: '35%'},
			{width: '40%'},
		],
  });
}); // End of use strict
