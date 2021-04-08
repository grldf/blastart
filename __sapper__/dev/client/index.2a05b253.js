import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, z as text, y as query_selector_all, g as claim_element, j as detach_dev, f as claim_space, h as children, A as claim_text, k as attr_dev, l as add_location, o as append_dev, n as insert_dev, D as set_data_dev, p as noop } from './client.b3e46a74.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/contact/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/contact/index.svelte";

function create_fragment(ctx) {
	let meta;
	let t0;
	let div1;
	let h1;
	let t1;
	let t2;
	let img;
	let img_src_value;
	let t3;
	let div0;
	let p0;
	let t4;
	let t5;
	let p1;
	let a0;
	let t6_value = /*info*/ ctx[0].telephone + "";
	let t6;
	let a0_href_value;
	let t7;
	let p2;
	let t8;
	let t9;
	let p3;
	let a1;
	let t10_value = /*info*/ ctx[0].emailcontact + "";
	let t10;
	let a1_href_value;

	const block = {
		c: function create() {
			meta = element("meta");
			t0 = space();
			div1 = element("div");
			h1 = element("h1");
			t1 = text("Contactez-Nous!");
			t2 = space();
			img = element("img");
			t3 = space();
			div0 = element("div");
			p0 = element("p");
			t4 = text("Thibault");
			t5 = space();
			p1 = element("p");
			a0 = element("a");
			t6 = text(t6_value);
			t7 = space();
			p2 = element("p");
			t8 = text("Ou par Email");
			t9 = space();
			p3 = element("p");
			a1 = element("a");
			t10 = text(t10_value);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-14c9pc3\"]", document.head);
			meta = claim_element(head_nodes, "META", { name: true, content: true });
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Contactez-Nous!");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			img = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
			t3 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t4 = claim_text(p0_nodes, "Thibault");
			p0_nodes.forEach(detach_dev);
			t5 = claim_space(div0_nodes);
			p1 = claim_element(div0_nodes, "P", {});
			var p1_nodes = children(p1);
			a0 = claim_element(p1_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t6 = claim_text(a0_nodes, t6_value);
			a0_nodes.forEach(detach_dev);
			p1_nodes.forEach(detach_dev);
			t7 = claim_space(div0_nodes);
			p2 = claim_element(div0_nodes, "P", {});
			var p2_nodes = children(p2);
			t8 = claim_text(p2_nodes, "Ou par Email");
			p2_nodes.forEach(detach_dev);
			t9 = claim_space(div0_nodes);
			p3 = claim_element(div0_nodes, "P", {});
			var p3_nodes = children(p3);
			a1 = claim_element(p3_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t10 = claim_text(a1_nodes, t10_value);
			a1_nodes.forEach(detach_dev);
			p3_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(meta, "name", "robots");
			attr_dev(meta, "content", "noindex");
			add_location(meta, file, 29, 2, 573);
			document.title = "Contact";
			attr_dev(h1, "class", "svelte-1lb7h3s");
			add_location(h1, file, 34, 2, 681);
			if (img.src !== (img_src_value = "logo-512.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "une oeuvre d'un membre de Blast");
			attr_dev(img, "class", "svelte-1lb7h3s");
			add_location(img, file, 35, 2, 708);
			add_location(p0, file, 37, 4, 798);
			attr_dev(a0, "href", a0_href_value = "tel:+33" + /*info*/ ctx[0].telephone);
			attr_dev(a0, "class", "svelte-1lb7h3s");
			add_location(a0, file, 39, 6, 828);
			add_location(p1, file, 38, 4, 818);
			add_location(p2, file, 41, 4, 896);
			attr_dev(a1, "href", a1_href_value = "mailto:" + /*info*/ ctx[0].telephone + "?subject=Deamnde infos");
			attr_dev(a1, "class", "svelte-1lb7h3s");
			add_location(a1, file, 43, 6, 930);
			add_location(p3, file, 42, 4, 920);
			attr_dev(div0, "class", "info svelte-1lb7h3s");
			add_location(div0, file, 36, 2, 775);
			attr_dev(div1, "class", "container svelte-1lb7h3s");
			add_location(div1, file, 33, 0, 655);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, meta);
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, h1);
			append_dev(h1, t1);
			append_dev(div1, t2);
			append_dev(div1, img);
			append_dev(div1, t3);
			append_dev(div1, div0);
			append_dev(div0, p0);
			append_dev(p0, t4);
			append_dev(div0, t5);
			append_dev(div0, p1);
			append_dev(p1, a0);
			append_dev(a0, t6);
			append_dev(div0, t7);
			append_dev(div0, p2);
			append_dev(p2, t8);
			append_dev(div0, t9);
			append_dev(div0, p3);
			append_dev(p3, a1);
			append_dev(a1, t10);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*info*/ 1 && t6_value !== (t6_value = /*info*/ ctx[0].telephone + "")) set_data_dev(t6, t6_value);

			if (dirty & /*info*/ 1 && a0_href_value !== (a0_href_value = "tel:+33" + /*info*/ ctx[0].telephone)) {
				attr_dev(a0, "href", a0_href_value);
			}

			if (dirty & /*info*/ 1 && t10_value !== (t10_value = /*info*/ ctx[0].emailcontact + "")) set_data_dev(t10, t10_value);

			if (dirty & /*info*/ 1 && a1_href_value !== (a1_href_value = "mailto:" + /*info*/ ctx[0].telephone + "?subject=Deamnde infos")) {
				attr_dev(a1, "href", a1_href_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			detach_dev(meta);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const infoQuery = gql`
    query infoBlast {
      infoBlast(id: "1") {
        telephone
        emailcontact
      }
    }
  `;

async function preload() {
	const client = new DefaultClient({
			uri: "https://www.grldfaure.xyz/graphql",
			fetch: this.fetch
		});

	const result = await client.query({ query: infoQuery });
	return { info: result.data.infoBlast };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Contact", slots, []);
	let { info } = $$props;
	const writable_props = ["info"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Contact> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("info" in $$props) $$invalidate(0, info = $$props.info);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		infoQuery,
		preload,
		info
	});

	$$self.$inject_state = $$props => {
		if ("info" in $$props) $$invalidate(0, info = $$props.info);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [info];
}

class Contact extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { info: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Contact",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*info*/ ctx[0] === undefined && !("info" in props)) {
			console.warn("<Contact> was created without expected prop 'info'");
		}
	}

	get info() {
		throw new Error("<Contact>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set info(value) {
		throw new Error("<Contact>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Contact;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMmEwNWIyNTMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGFjdC9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gIC8vaW1hZ2UgbmV3c2xldHRlclxuICBpbXBvcnQgQXBvbGxvQ2xpZW50LCB7IGdxbCB9IGZyb20gXCJhcG9sbG8tYm9vc3RcIjtcblxuICBjb25zdCBpbmZvUXVlcnkgPSBncWxgXG4gICAgcXVlcnkgaW5mb0JsYXN0IHtcbiAgICAgIGluZm9CbGFzdChpZDogXCIxXCIpIHtcbiAgICAgICAgdGVsZXBob25lXG4gICAgICAgIGVtYWlsY29udGFjdFxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICB1cmk6IFwiaHR0cHM6Ly93d3cuZ3JsZGZhdXJlLnh5ei9ncmFwaHFsXCIsXG4gICAgICBmZXRjaDogdGhpcy5mZXRjaCxcbiAgICB9KTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgcXVlcnk6IGluZm9RdWVyeSxcbiAgICB9KTtcbiAgICByZXR1cm4geyBpbmZvOiByZXN1bHQuZGF0YS5pbmZvQmxhc3QgfTtcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgaW5mbztcbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleFwiIC8+XG4gIDx0aXRsZT5Db250YWN0PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGgxPkNvbnRhY3Rlei1Ob3VzITwvaDE+XG4gIDxpbWcgc3JjPVwibG9nby01MTIucG5nXCIgYWx0PVwidW5lIG9ldXZyZSBkJ3VuIG1lbWJyZSBkZSBCbGFzdFwiIC8+XG4gIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgPHA+VGhpYmF1bHQ8L3A+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwidGVsOiszM3tpbmZvLnRlbGVwaG9uZX1cIj57aW5mby50ZWxlcGhvbmV9PC9hPlxuICAgIDwvcD5cbiAgICA8cD5PdSBwYXIgRW1haWw8L3A+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwibWFpbHRvOntpbmZvLnRlbGVwaG9uZX0/c3ViamVjdD1EZWFtbmRlIGluZm9zXCJcbiAgICAgICAgPntpbmZvLmVtYWlsY29udGFjdH08L2FcbiAgICAgID5cbiAgICA8L3A+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogNTB2aDtcbiAgICB3aWR0aDogNTB2dztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgXCIgLiB0aXRyZVwiXG4gICAgICBcImltYWdlIGluZm9cIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggI2VmMTFhMTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDZweCAxNXB4IGJsYWNrO1xuICB9XG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogaW50ZXJzdGF0ZSB0aGluO1xuICAgIGdyaWQtYXJlYTogdGl0cmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG4gIGltZyB7XG4gICAgZ3JpZC1hcmVhOiBpbWFnZTtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nOiAwIDAgMTAlIDEwJTtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICAuaW5mbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGdyaWQtYXJlYTogaW5mbztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAjZWYxMWExO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB0b3A6IDYwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAwdmg7XG4gICAgICB3aWR0aDogOTB2dztcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwidGl0cmVcIlxuICAgICAgICBcImluZm9cIjtcbiAgICB9XG4gICAgaDEge1xuICAgICAgZ3JpZC1hcmVhOiB0aXRyZTtcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkF1Q3lDLEdBQUksSUFBQyxTQUFTOzs7Ozs7Ozs7MEJBSzdDLEdBQUksSUFBQyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkRBTEosR0FBSSxJQUFDLFNBQVM7Ozs7OzZEQUlkLEdBQUksSUFBQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytEQUpJLEdBQUksSUFBQyxTQUFTOztxRkFBaEMsR0FBSSxJQUFDLFNBQVM7Ozs7aUVBSzNCLEdBQUksSUFBQyxZQUFZOztxRkFESixHQUFJLElBQUMsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BdkM3QixTQUFTLEdBQUcsR0FBRzs7Ozs7Ozs7O2VBUUMsT0FBTztPQUNyQixNQUFNLE9BQU9BLGFBQVk7R0FDN0IsR0FBRyxFQUFFLG1DQUFtQztHQUN4QyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7OztPQUViLE1BQU0sU0FBUyxNQUFNLENBQUMsS0FBSyxHQUMvQixLQUFLLEVBQUUsU0FBUztVQUVULElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVM7Ozs7OztPQUszQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
