
	var editor; // use a global for the submit and return data rendering in the examples
	var mTable;
	var data_act; // account
	var data_cnt; // contact
	// xxx
	var data_act = [{"name":"テスト取引先","torihikisakino__c":"TR-000001","herokuid__c":"h1111","tantoshashimei__c":null,"denwabango__c":null,"emaiil1__c":null,"emaiil2__c":null,"emaiil3__c":null}];
	$(document).ready(function() {
		editor = new $.fn.dataTable.Editor( {
			ajax: {
				url: "/account-create-edit",
				method: "get",
			},
			//data: data_act,
			table: "#tblAct",
			idSrc:  'torihikisakino__c',
			fields: [ 
						{	label: '取引先名' , name:'name'    },
						{	label: '英文取引先名' , name:'eibuntorihikisakimei__c'    },
						{	label: '過去会社名' , name:'kakogaishamei__c'    },
						{	label: '国' , name:'kuni__c'    },
						{	label: '郵便番号' , name:'yuubimbango__c'    },
						{	label: '住所1' , name:'jusho1__c'    },
						{	label: '住所2' , name:'jusho2__c'    },
						{	label: '代表者役職' , name:'daihyoshayakushoku__c'    },
						{	label: '代表者氏名' , name:'daihyoshashimei__c'    },
						{	label: '部署' , name:'busho__c'    },
						{	label: '担当者氏名' , name:'tantoshashimei__c'    },
						{	label: '電話番号' , name:'denwabango__c'    },
						{	label: 'E-mail 1' , name:'emaiil1__c'    },
						{	label: 'E-mail 2' , name:'emaiil2__c'    },
						{	label: 'E-mail 3' , name:'emaiil3__c'    },
						{	label: '確認ステータス' , name:'kakuninstatus__c'    },
						{	label: '契約ステータス' , name:'keiyakustatus__c'    },
						{	label: '申請ステータス' , name:'shinseistatus__c'    },
						{	label: 'HerokuId' , name:'herokuid__c'    }
					]
		} );

		mTable = $('#tblAct').DataTable( {
			scrollX: true,
			scrollY: 380,	
			pageLength: 30,
			dom: "Bfrtip",
			ajax: {
							url: "/account-init",
							method: "get",
							data: JSON.stringify({
								name: "xxxx"
							}),
							contentType: "application/json; charset=utf-8",
							dataType: "json"
				},
			//data:data_act,
			columns: [
					{ data: "name"},
					{ data: "torihikisakino__c"},
					{ data: "eibuntorihikisakimei__c"},
					{ data: "kakogaishamei__c"},
					{ data: "kuni__c"},
					{ data: "yuubimbango__c"},
					{ data: "jusho1__c"},
					{ data: "jusho2__c"},
					{ data: "daihyoshayakushoku__c"},
					{ data: "daihyoshashimei__c"},
					{ data: "busho__c"},
					{ data: "tantoshashimei__c"},
					{ data: "denwabango__c"},
					{ data: "emaiil1__c"},
					{ data: "emaiil2__c"},
					{ data: "emaiil3__c"},
					{ data: "kakuninstatus__c"},
					{ data: "keiyakustatus__c"},
					{ data: "shinseistatus__c"},
					{ data: "herokuid__c"}
			],
			select: true,
			buttons: [
				{ extend: "create", editor: editor },
				{ extend: "edit",   editor: editor }
			]
		} );
	} );


