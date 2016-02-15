//  Given two strings s and t, determine if they are isomorphic.
//  Two strings are isomorphic if the characters in s can be replaced to get t.

// For example,"egg" and "add" are isomorphic, "foo" and "bar" are not.

function Isisomorphic(s, t) {
	if (s.length !== t.length) {
		return false;
	}
	var s_map = {},
		t_map = {},
		l = s.length;
	for (var i = 0; i < l; i++) {
		if (s_map[s[i]]) {
			s_map[s[i]]++;
		} else {
			s_map[s[i]] = 1;
		}

		if (t_map[t[i]]) {
			t_map[t[i]]++;
		} else {
			t_map[t[i]] = 1;
		}
	}

	var s_keysLength = Object.keys(s_map).length;
	var t_keysLength = Object.keys(t_map).length;
	if (s_keysLength !== t_keysLength) {
		return false;
	}
	for (var i = 0; i < s_keysLength; i++) {
		s = s.replace(new RegExp(Object.keys(s_map)[i], 'g'), Object.keys(t_map)[i]);
	};
	console.log(s);
	console.log(t);
	return s === t;
}

console.log(Isisomorphic("egg", "add"));