<?php

namespace Palasthotel\WordPress\Headless\Interfaces;

use WP_REST_Request;
use WP_REST_Response;

interface IUserRouteExtension {
	function response( WP_REST_Response $response, \WP_User $comment, WP_REST_Request $request): WP_REST_Response;
}
