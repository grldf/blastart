import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, n as noop } from './client.f8a545ff.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/video/index.svelte generated by Svelte v3.35.0 */

function create_fragment(ctx) {
	const block = {
		c: noop,
		l: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
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

const videoQuery = gql`
  query video {
        jpvideos{
            titre
  	        video{
                  url
                }
  }
}
`;

async function preload() {
	const client = new DefaultClient({
			uri: "https://www.grldfaure.xyz/graphql",
			fetch: this.fetch
		});

	const results = await client.query({ query: videoQuery });
	return { video: results.data.jpvideos };
}

let urlpApi = "https://www.grldfaure.xyz";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Video", slots, []);
	let { video } = $$props;
	const writable_props = ["video"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Video> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("video" in $$props) $$invalidate(0, video = $$props.video);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		videoQuery,
		preload,
		urlpApi,
		video
	});

	$$self.$inject_state = $$props => {
		if ("video" in $$props) $$invalidate(0, video = $$props.video);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [video];
}

class Video extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { video: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Video",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*video*/ ctx[0] === undefined && !("video" in props)) {
			console.warn("<Video> was created without expected prop 'video'");
		}
	}

	get video() {
		throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set video(value) {
		throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Video;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZmExYzlhM2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdmlkZW8vaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICAgIGltcG9ydCBBcG9sbG9DbGllbnQsIHsgZ3FsIH0gZnJvbSBcImFwb2xsby1ib29zdFwiO1xuXG5jb25zdCB2aWRlb1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSB2aWRlbyB7XG4gICAgICAgIGpwdmlkZW9ze1xuICAgICAgICAgICAgdGl0cmVcbiAgXHQgICAgICAgIHZpZGVve1xuICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgfVxuICB9XG59XG5gO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoKSB7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHVyaTogXCJodHRwczovL3d3dy5ncmxkZmF1cmUueHl6L2dyYXBocWxcIixcbiAgICBmZXRjaDogdGhpcy5mZXRjaCxcbiAgfSk7XG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiB2aWRlb1F1ZXJ5LFxuICB9KTtcbiAgcmV0dXJuIHsgdmlkZW86IHJlc3VsdHMuZGF0YS5qcHZpZGVvcyB9O1xufVxubGV0IHVybHBBcGkgPSBcImh0dHBzOi8vd3d3LmdybGRmYXVyZS54eXpcIjtcbjwvc2NyaXB0PlxuPHNjcmlwdD5cbiAgICBleHBvcnQgbGV0IHZpZGVvO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuPC9zdHlsZT4iXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFHTSxVQUFVLEdBQUcsR0FBRzs7Ozs7Ozs7Ozs7ZUFVQSxPQUFPO09BQ3JCLE1BQU0sT0FBT0EsYUFBWTtHQUM3QixHQUFHLEVBQUUsbUNBQW1DO0dBQ3hDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzs7O09BRWIsT0FBTyxTQUFTLE1BQU0sQ0FBQyxLQUFLLEdBQ2hDLEtBQUssRUFBRSxVQUFVO1VBRVYsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUTs7O0lBRW5DLE9BQU8sR0FBRywyQkFBMkI7Ozs7O09BRzFCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
