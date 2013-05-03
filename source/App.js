enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	components:[
		{kind: "onyx.Toolbar", style:"", components: [
			{kind: "onyx.Button", content:"HOME", classes: "onyx-blue"},
			{kind: "onyx.InputDecorator", style:"float:right;",  components: [
				{kind: "onyx.Input", name: "searchTerm",
					placeholder: "Search on Twitter", onkeydown: "searchOnEnter"},
				{kind: "Image", src: "$onyx/images/search-input-search.png", ontap: "search"}
			]},
		]},
		{kind: "enyo.Scroller", fit: true, components: [
			{name: "main", classes: "nice-padding", allowHtml: true}
		]},
		{kind: "onyx.Toolbar", components: [
			{kind: "onyx.Button", content: "Tap me", ontap: "helloWorldTap"}
		]}
	],
	helloWorldTap: function(inSender, inEvent) {
		this.$.main.addContent("The button was tapped.<br/>");
	}
});
